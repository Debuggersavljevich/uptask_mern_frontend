import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"

const Registrar = () => {
  
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')

  const [alerta, setAlerta] = useState({})


  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })  
      return
    }
    if(password !== repetirPassword){
     setAlerta({
        msg: 'Las contraseñas no son iguales',
        error: true
      })
      return
    }
    if(password.length < 6){
     setAlerta({
        msg: 'La contraseña debe de tener 6 caracteres o más',
        error: true
      })
      return
    }

    setAlerta({})

    //Crear el usuario en la API
    try {
      const {data} = await axios.post('http://localhost:8080/api/usuarios', {nombre, email, password}) 
      
      setAlerta({
        msg: data.msg,
        error: false
      })
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
      <h1 className='text-sky-600 font-black text-6xl capitalize mb-10'>Crea tu cuenta y administra tus {''}
        <span className='text-slate-700'>proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form onSubmit={handleSubmit} className='my-10 bg-white shadow-2xl rounded-lg p-10'>
        <div className='my-5'>
          <label htmlFor='nombre' className='uppercase text-gray-600 block text-xl font-bold'>Tu nombre</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} id='nombre' type="text" placeholder='Tu nombre' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} id='email' type="email" placeholder='email de registro' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} id='password' type="password" placeholder='tu password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>


        <div className='my-5'>
          <label htmlFor='re-password' className='uppercase text-gray-600 block text-xl font-bold'>Repetir Password</label>
          <input value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} id='re-password' type="password" placeholder='repetir tu password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <input type="submit" value="Crear cuenta" className='bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-all' />

      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link to="/" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          ¿Ya tienes una cuenta? Iniciá sesión
        </Link>
        
        <Link to="olvide-password" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Olvidé mi password
        </Link>
      </nav>
    </>
  


  )
}

export default Registrar