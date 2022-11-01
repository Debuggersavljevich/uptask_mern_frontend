import {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import FormularioProyecto from '../components/FormularioProyecto'

const EditarProyecto = () => {
  
    const params = useParams()
    const { obtenerProyecto, proyecto, proyectos } = useProyectos()

    const {nombre} = proyecto

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])



  return (
    <div>
        
        <Link to={`/proyectos/${params.id}`} className='font-main underline underline-offset-4 decoration-indigo-500 font-bold'>📁⬅ Proyectos / {nombre}  </Link>
        
        <h1 className='flex justify-center font-black text-4xl'>Editar proyecto {nombre}</h1>

        <div className='mt-10 flex justify-center'> <FormularioProyecto /> </div>

    </div>

  )
}

export default EditarProyecto