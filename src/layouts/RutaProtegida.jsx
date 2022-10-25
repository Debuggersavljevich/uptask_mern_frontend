import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RutaProtegida = () => {

    const [auth, setAuth] = useAuth()

    console.log(auth);

    return (
    <div>RutaProtegida</div>
  )
}

export default RutaProtegida