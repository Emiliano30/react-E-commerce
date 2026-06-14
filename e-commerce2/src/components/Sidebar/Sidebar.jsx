import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useFetch from '../../Hook/useFetch';
function Sidebar(){
    const {data} = useFetch('/productos.json');


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

        {data.categorias.map((cat) => (
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