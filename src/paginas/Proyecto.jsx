import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Loader from '../components/Loader'
import ModalFormularioTarea from '../components/ModalFormularioTarea'


const Proyecto = () => {
  
  const params = useParams()
  
  const [modal, setModal] = useState(false)
  
  const { obtenerProyecto, proyecto, cargando } = useProyectos()


  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  const {nombre } = proyecto

if(cargando) return <Loader/>

return (
  <div>
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

  
      <button onClick={() => setModal(true)} type='button' className='items-center mt-5 flex justify-center gap-2 text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white text-center hover:bg-sky-600 transition-colors'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

       
        Nueva Tarea
      </button>
  
      <ModalFormularioTarea modal={modal} setModal={setModal} />
         
  
</div>   
  
)}

export default Proyecto