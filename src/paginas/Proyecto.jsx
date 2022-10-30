import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
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
        <h1 className='font-black text-4xl'> {nombre} </h1>
    </div>
  
    ))
}

export default Proyecto