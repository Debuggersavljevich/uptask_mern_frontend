import {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import FormularioProyecto from '../components/FormularioProyecto'
import Loader from '../components/Loader'

const EditarProyecto = () => {
  
    const params = useParams()
    const { obtenerProyecto, proyecto, proyectos, eliminarProyecto} = useProyectos()

    const {nombre} = proyecto

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const handleClick = () => {
        if(confirm('¿Seguro que quieres eliminar éste proyecto?')){
            eliminarProyecto(params.id)
        }
    }


  return (
    <div>
        
        <Link to={`/proyectos/${params.id}`} className='font-main underline underline-offset-4 decoration-indigo-500 font-bold'>📁⬅ Proyectos / {nombre}  </Link>
        
    <h1 className='flex justify-center font-black text-4xl'>Editar proyecto {nombre}</h1>
    <div className='flex justify-end gap-1 font-bold'>
        <div className='flex items-center gap-1 p-2 bg-red-200 hover:bg-red-400 transition-colors cursor-pointer rounded-lg text-black'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    <button onClick={handleClick} className='flex items-center'>ELIMINAR</button>

        </div>
    </div>
    

        <div className='mt-10 flex justify-center'> <FormularioProyecto /> </div>

    </div>

  )
}

export default EditarProyecto