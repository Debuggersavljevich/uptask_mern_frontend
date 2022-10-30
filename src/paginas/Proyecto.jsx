import {useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Loader from '../components/Loader'


const Proyecto = () => {
  
  const params = useParams()
  console.log(params);
  
  const { obtenerProyecto, proyecto, cargando } = useProyectos()


  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  const {nombre } = proyecto

  return (
    
    (cargando ? <Loader/>: 
    <div>
        <Link to='/proyectos' className='font-main underline underline-offset-4 decoration-indigo-500 font-bold'>📁⬅ Proyectos / </Link>

        <h1 className='font-black text-4xl'> {nombre} </h1>
    </div>
  
    ))
}

export default Proyecto