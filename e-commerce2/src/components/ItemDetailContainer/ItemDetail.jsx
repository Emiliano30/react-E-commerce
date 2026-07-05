import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const ItemDetail = ({product}) => {

    const disable = product?.stock <= 0;
    const {addToCart} = useCart()

    

    const handlerAgregar = function (cantidadSeleccionada){
        if(cantidadSeleccionada > product?.stock) return

        addToCart(product,cantidadSeleccionada)
        return

    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 overflow-hidden">

            <figure className="lg:w-87.5 bg-base-200">
                <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={product?.img}
                    alt={product?.nombre}
                />
            </figure>

            <div className="card-body flex flex-col justify-between">

                <div className="space-y-3">

                    <div className="badge badge-primary badge-outline">
                        Nuevo
                    </div>

                    <h2 className="card-title text-3xl font-black">
                        {product?.nombre}
                    </h2>

                    <p className="text-base-content/70 leading-relaxed">
                        {product?.description}
                    </p>

                    {disable ? (
                        <p>No hay Stock disponible por el momento!</p>
                    ) : (
                        <p className="text-base-content/70 leading-relaxed" >
                        Stock Disponible: {product?.stock}
                        </p>
                    )}

                    <div className="text-3xl font-extrabold text-primary">
                        ${product?.precio}
                    </div>

                </div>

                <div className="mt-6 w-44">
                    <ItemCount 
                    handlerAction={handlerAgregar} 
                    stockDisponible={product?.stock} 
                    disable={disable}
                    />
                </div>

            </div>

    </div>
    );
};



export default ItemDetail;