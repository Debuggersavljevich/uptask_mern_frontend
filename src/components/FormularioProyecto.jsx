import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"

const FormularioProyecto = () => {
  
  
  const [id, setId] = useState(null)
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fechaEntrega, setFechaEntrega] = useState('')
  const [cliente, setCliente] = useState('')

  const {mostrarAlerta, alerta, submitProyecto, proyecto} = useProyectos()

  const params = useParams()
  useEffect(() => {
      console.log(params);
    if(params.id){
        setId(proyecto._id)
        setNombre(proyecto.nombre),
        setDescripcion(proyecto.descripcion),
        setFechaEntrega(proyecto.fechaEntrega?.split('T')[0]),
        setCliente(proyecto.cliente)

        console.log(proyecto.fechaEntrega);
    } 
  }, [params])

  const handleSubmit = async e => {
        e.preventDefault()

        if([nombre,descripcion,fechaEntrega,cliente].includes('')){
           mostrarAlerta({
               msg: 'Todos los campos son obligatorios',
               error: true
           }) 
           return
        }
        //Pasar los datos
        
        await submitProyecto({id, nombre, descripcion, fechaEntrega, cliente})        
    
        setId(null)
        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')
    }
        
        const {msg} = alerta

  return (
    <>

        <form onSubmit={handleSubmit} className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow-2xl'>

            {msg && <Alerta alerta={alerta}/>}

            <div className="mb-5 mt-5">
                <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>
                    Nombre Proyecto
                </label>
                <input 
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                id='nombre' 
                placeholder='Nombre del Proyecto' 
                type="text" 
                className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
            </div>

            <div className="mb-5">
                <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='descripcion'>
                    Nombre Proyecto
                </label>
                <textarea 
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
                id='descripcion' 
                placeholder='Descripcion del Proyecto' 
                className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
            </div>
        
            <div className="mb-5">
                <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='fecha-entrega'>
                    Fecha Entrega
                </label>
                <input 
                value={fechaEntrega}
                onChange={e => setFechaEntrega(e.target.value)}
                type='date'
                id='fecha-entrega'  
                className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
            </div>
            
            <div className="mb-5">
                <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='cliente'>
                    Nombre Cliente
                </label>
                <input 
                value={cliente}
                onChange={e => setCliente(e.target.value)}
                id='cliente' 
                placeholder='Nombre del cliente' 
                type="text" 
                className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
            </div>
        
            <input type="submit" value={id ? 'Actualizar proyecto' : 'Crear proyecto NUEVO'} className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded-lg cursor-pointer hover:bg-sky-700 transition-colors" />
        
        </form>

    </>
  )
}

export default FormularioProyecto