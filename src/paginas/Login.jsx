import React from 'react'

const Login = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Inicia sesión para administrar tus {''}
        <span className='text-slate-700'>proyectos</span>
      </h1>
    
      <form className='my-10 bg-white shadow-2xl rounded-lg p-10'>
        <div className='my-5'>
          <label htmlFor='email' className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input id='email' type="email" placeholder='email de registro' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <div className='my-5'>
          <label htmlFor='password' className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
          <input id='password' type="password" placeholder='tu password' className='w-full mt-3 p-3 border rounded-xl bg-gray-50' />
        </div>

        <input type="submit" value="Iniciar Sesión" className='bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-all' />

      </form>
    </>
  )
}

export default Login