import React from 'react'
import useProyectos from '../hooks/useProyectos'
import PreviewProyecto from '../components/PreviewProyecto'

const Proyectos = () => {
  
  const {proyectos} = useProyectos()

  console.log(proyectos);

  return (
    <>
    
    <h1 className='text-4xl font-black text-center font-main underline underline-offset-4 decoration-indigo-400'>
      📁Proyectos
    </h1>

    <div className='bg-white shadow-2xl mt-10 rounded-lg  font-bold'>
        {proyectos.length ? 
          proyectos.map(proyecto => (
           <PreviewProyecto 
            key={proyecto._id}
            proyecto={proyecto}
           /> 
          ))
        : <p className=' text-gray-600 uppercase text-center p-5'>No hay proyectos aún </p> }
    </div>
    
    </>
  )
}

export default Proyectos