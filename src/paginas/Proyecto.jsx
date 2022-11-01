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
    <div className='flex justify-between'>
        <Link to='/proyectos' className='font-main underline underline-offset-4 decoration-indigo-500 font-bold'>📁⬅ Proyectos / </Link>

        <h1 className='font-black text-4xl'> {nombre} </h1>
        <div className='flex items-center gap-1 p-2 bg-orange-200 hover:bg-orange-400 transition-colors cursor-pointer rounded-lg text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        
          <Link className='uppercase font-bold' to={`/proyectos/editar/${params.id}`}>Editar</Link>
        
        </div>
    </div>
  
    ))
}

export default Proyecto