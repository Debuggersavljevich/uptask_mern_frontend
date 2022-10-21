import { Link } from 'react-router-dom'


const NuevoPassword = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Reestablece tu password y tus {''}
        <span className='text-slate-700'>proyectos</span>
      </h1>
    
      <form className='my-10 bg-white shadow-2xl rounded-lg p-10'>
        
        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>Nuevo Password</label>
          <input id='password' type="password" placeholder='escribe tu nuevo password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <input type="submit" value="Guardar nuevo password" className='bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-all' />

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

export default NuevoPassword