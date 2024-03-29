import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-emerald-400 to-emerald-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-20'`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta