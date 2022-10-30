import { Link } from "react-router-dom"

const PreviewProyecto = ({proyecto}) => {
  
    const {nombre, _id, cliente} = proyecto

    return (
    <div className="border-b p-5 flex font-main shadow-sm">

        
        <p className="flex-1 uppercase" >
            {nombre}
        
        
        <span className="text-sm text-gray-500 uppercase font-bold bg-sky-200 ml-2 rounded-lg p-1">{''} {cliente}</span>

        </p>
        
        <Link className="text-gray-600 hover:text-gray-800 underline underline-offset-2 bg-teal-200 hover:bg-teal-400 transition-colors rounded p-1 uppercase font-bold text-sm" to={`${_id}`}>
            Ver Proyecto
        </Link>
    </div>

  )
}

export default PreviewProyecto