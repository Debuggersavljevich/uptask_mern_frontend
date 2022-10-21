import { Link } from 'react-router-dom'

const OlvidePassword = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Recupera acceso a tus {''}
        <span className='text-slate-700'>proyectos</span>
      </h1>
    
      <form className='my-10 bg-white shadow-2xl rounded-lg p-10'>
       <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input id='email' type="email" placeholder='email de registro' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>


       <input type="submit" value="Enviar instrucciones" className='bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-all' />

      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link to="/" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          ¿Ya tienes una cuenta? Iniciá sesión
        </Link>
        
        <Link to="/" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          ¿No tienes una cuenta? Registrate
        </Link>
      </nav>
    </>
  


  )
}

export default OlvidePassword