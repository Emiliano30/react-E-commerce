import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useCategorias } from "../../Hook/useFirebase";



function Sidebar(){
    const {categorias,loading, error}= useCategorias();

    if (loading) {
        return (
            <div className="w-full max-w-xs h-full bg-base-200 border-r border-base-300 p-5 flex flex-col gap-3 shadow-xl">
                <h2 className="text-2xl font-black mb-4 tracking-wide">Catálogo</h2>
            </div>
        );
    }


    if (error) {
        return (
            <div className="w-full max-w-xs h-full bg-base-200 border-r border-base-300 p-5 flex flex-col gap-3 shadow-xl">
                <h2 className="text-2xl font-black mb-4 tracking-wide">Catálogo</h2>
                <div className="alert alert-error shadow-md py-3 text-xs font-semibold flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Error de conexión</span>
                    </div>
                    <p className="text-left text-base-content/70 font-mono text-[10px] break-all">
                        {error}
                    </p>
                </div>
            </div>
        );
    }

    return(
        <div className="w-full max-w-xs h-full bg-base-200 border-r border-base-300 p-5 flex flex-col gap-3 shadow-xl">

            <h2 className="text-2xl font-black mb-4 tracking-wide">
                Catálogo
            </h2>
            <ul>
                <li className="mb-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `group flex items-center px-4 py-3 rounded-2xl
                            transition-all duration-300 ease-in-out
                            shadow-sm hover:shadow-lg hover:-translate-y-1
                            font-semibold
                            ${
                            isActive
                                ? "bg-primary text-primary-content"
                                : "bg-base-100 hover:bg-primary hover:text-primary-content"
                            }`
                        }
                    >
                        Todo
                    </NavLink>
                </li>

                {categorias.map((cat) => (
                    <li className="mb-3" key={cat.id}>
                    <NavLink
                        to={`/categorias/${cat.id}`}
                        className={({ isActive }) =>
                            `group flex items-center px-4 py-3 rounded-2xl
                            transition-all duration-300 ease-in-out
                            shadow-sm hover:shadow-lg hover:-translate-y-1
                            font-semibold
                            ${
                            isActive
                                ? "bg-primary text-primary-content"
                                : "bg-base-100 hover:bg-primary hover:text-primary-content"
                            }`
                        }
                    >
                        {cat.nombre}
                    </NavLink>
                </li>
                ))}

            </ul>
        </div>
    )
}

export default Sidebar