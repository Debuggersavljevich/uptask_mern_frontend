import { data } from 'autoprefixer'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth'

const Login = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const {setAuth} = useAuth()



  const handleSubmit = async e => {
    e.preventDefault()

    if([email, password].includes('')){
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })
      return
    }
    
    try {
     
      const {data} = await clienteAxios.post('/usuarios/login', {email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
    } catch (error) {
     setAlerta({
       msg: error.response.data.msg,
       error: true
     }) 
    }


  }

  const {msg} = alerta

  return (
    
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize mb-10'>Inicia sesión para administrar tus {''}
        <span className='text-slate-700'>proyectos</span>
      </h1>
    
      {msg && <Alerta alerta={alerta}/>}


      <form onSubmit={handleSubmit} className='my-10 bg-white shadow-2xl rounded-lg p-10'>
        <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          id='email' 
          type="email" 
          placeholder='email de registro' 
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />

        </div>

        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
          <input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          id='password' 
          type="password" 
          placeholder='tu password' 
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <input type="submit" value="Iniciar Sesión" className='bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-all' />

      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link to="registrar" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          ¿No tienes una cuenta? Registrate gratis
        </Link>
        
        <Link to="olvide-password" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Olvidé mi password
        </Link>
      </nav>
    </>
  )
}

export default Login