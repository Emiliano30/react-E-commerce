import { Link } from "react-router-dom"
function Sidebar(){
    return(
        <div className="w-full max-w-xs h-full bg-base-200 border-r border-base-300 p-5 flex flex-col gap-3 shadow-xl">

    <h2 className="text-2xl font-black mb-4 tracking-wide">
        Catálogo
    </h2>

    <Link
        to="/"
        className="group flex items-center px-4 py-3 rounded-2xl 
        bg-base-100 hover:bg-primary hover:text-primary-content
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-lg hover:-translate-y-1
        font-semibold"
    >
        Todos los productos
    </Link>

    <Link
        to="/"
        className="group flex items-center px-4 py-3 rounded-2xl 
        bg-base-100 hover:bg-primary hover:text-primary-content
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-lg hover:-translate-y-1
        font-semibold"
    >
        Marcos
    </Link>

    <Link
        to="/"
        className="group flex items-center px-4 py-3 rounded-2xl 
        bg-base-100 hover:bg-primary hover:text-primary-content
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-lg hover:-translate-y-1
        font-semibold"
    >
        Vidrios
    </Link>

    <Link
        to="/"
        className="group flex items-center px-4 py-3 rounded-2xl 
        bg-base-100 hover:bg-primary hover:text-primary-content
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-lg hover:-translate-y-1
        font-semibold"
    >
        Estuches
    </Link>

    <Link
        to="/"
        className="group flex items-center px-4 py-3 rounded-2xl 
        bg-base-100 hover:bg-primary hover:text-primary-content
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-lg hover:-translate-y-1
        font-semibold"
    >
        Soluciones
    </Link>
</div>
    )
}

export default Sidebar