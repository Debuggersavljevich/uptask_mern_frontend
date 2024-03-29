import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            
            <h2 className='text-4xl text-sky-600 font-main font-bold text-center'>UpTask</h2>
            <input type="search" placeholder='buscar proyecto' className='rounded-lg w-96 block p-2 border' />

            <div className='flex items-center gap-4'>
                <Link to='/proyectos' className='font-bold uppercase underline underline-offset-4 decoration-indigo-400'>Mis Proyectos</Link>
                <button type='button' className='text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold'>Cerrar Sesion</button>
            </div>

        </div>

    </header>
  )
}

export default Header