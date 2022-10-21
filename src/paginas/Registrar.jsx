import { Link } from "react-router-dom"

const Registrar = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Crea tu cuenta y administra tus {''}
        <span className='text-slate-700'>proyectos</span>
      </h1>
    
      <form className='my-10 bg-white shadow-2xl rounded-lg p-10'>
        <div className='my-5'>
          <label htmlFor='nombre' className='uppercase text-gray-600 block text-xl font-bold'>Tu nombre</label>
          <input id='nombre' type="text" placeholder='Tu nombre' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>
        <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input id='email' type="email" placeholder='email de registro' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
          <input id='password' type="password" placeholder='tu password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>


        <div className='my-5'>
          <label htmlFor='forgot-password' className='uppercase text-gray-600 block text-xl font-bold'>Repetir Password</label>
          <input id='forgot-password' type="password" placeholder='repetir tu password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
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