import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';


const ItemDetail = ({setCarrito,id,nombre,description,precio,stock,img}) => {
    const [cantidadAgregada,setCantidadAgregada] = useState(0)
    const disable = stock <= 0;



    const handlerAgregar = function (cantidadSeleccionada){
        if(cantidadSeleccionada > stock) return

        setCarrito(cantidadSeleccionada)
        setCantidadAgregada(cantidadSeleccionada)
        return

    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 overflow-hidden">

            <figure className="lg:w-87.5 bg-base-200">
                <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={img}
                    alt={nombre}
                />
            </figure>

            <div className="card-body flex flex-col justify-between">

                <div className="space-y-3">

                    <div className="badge badge-primary badge-outline">
                        Nuevo
                    </div>

                    <h2 className="card-title text-3xl font-black">
                        {nombre}
                    </h2>

                    <p className="text-base-content/70 leading-relaxed">
                        {description}
                    </p>

                    {disable ? (
                        <p>No hay Stock disponible por el momento!</p>
                    ) : (
                        <p className="text-base-content/70 leading-relaxed" >
                        Stock Disponible: {stock}
                        </p>
                    )}

                    <div className="text-3xl font-extrabold text-primary">
                        ${precio}
                    </div>

                </div>

                <div className="mt-6">
                    <ItemCount 
                    handlerAgregar={handlerAgregar} 
                    cantidadAgregada={cantidadAgregada}
                    stockDisponible={stock} 
                    disable={disable}
                    />
                </div>

            </div>

    </div>
    );
};



export default ItemDetail;