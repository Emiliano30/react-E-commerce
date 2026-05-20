import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Item({id,nombre,precio,description,img}){


    return(
        <div className="group relative w-96 overflow-hidden rounded-2xl">

        
            <img
                src={img}
                alt={nombre}
                className="h-full w-full object-cover"
            />

            
            <div
                className="
                absolute inset-0
                bg-black/70
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                flex flex-col justify-end
                gap-3
                p-6
                text-white
                "
            >
                <h2 className="text-2xl font-bold">{nombre}</h2>

                <p className="mt-2">
                {description}
                </p>

                <p>
                ${precio}
                </p>

                <Link
                to={`item/detail/${id}`}
                className="group flex w-24 items-center px-4 py-3 rounded-2xl 
                bg-primary hover:bg-base-100
                transition-all duration-300 ease-in-out
                shadow-sm hover:shadow-lg hover:-translate-y-1
                font-semibold"
                >Comprar</Link>
            </div>
        </div>
    )
}

export default Item