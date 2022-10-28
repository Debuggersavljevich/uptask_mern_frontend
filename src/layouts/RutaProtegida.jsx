import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Loader from '../components/Loader'

const RutaProtegida = () => {

    const {auth, cargando} = useAuth()

    // console.log(auth);

    if(cargando){
      return <Loader/>
    }

    return (
    <>
      {auth._id ? (
        <div className='bg-gray-100'>

          <Header />

          <div className='md:flex md:min-h-scren'>

            <Sidebar />
            
            <main className='p-10 flex-1'>
              <Outlet />
            </main>
          
          </div>
        </div>
      )  : <Navigate to="/" />}
      
    </>
  )
}

export default RutaProtegida