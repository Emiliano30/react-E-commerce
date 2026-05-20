import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import ButtonModal from '../Button/ButtonModal';
import { Fullscreen } from '@boxicons/react';


const ItemCount = ({handlerAgregar,stockDisponible,cantidadAgregada,disable}) => {
    const [count,setCount] = useState(1);


    const incrementar = function(){
        if(count < stockDisponible){
            setCount(count + 1);
        }
    }

    const decrementar = function(){
        if(count <= 1) return;
        setCount(count - 1);
    }

    const agregarCarrito = function(){
        if(disable) return
        handlerAgregar(count);
        setCount(1);
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3">
                <Button
                    text={"-"}
                    disable={disable}
                    callBack={decrementar}
                    className="
                    btn btn-circle btn-outline
                    hover:scale-110 transition-transform"
                />

                <div className="
                    min-w-17.5
                    h-12
                    flex items-center justify-center
                    rounded-2xl
                    bg-base-200
                    text-2xl
                    font-bold
                    shadow-inner
                    ">
                    {count}
                </div>

                <Button
                disable={disable}
                text={"+"}
                callBack={incrementar}
                className="
                btn btn-circle btn-primary
                hover:scale-110 transition-transform"
                />

            </div>

            <ButtonModal 
            text={'Agregar al carrito'} 
            agregarCarrito={agregarCarrito} 
            cantidadAgregada={cantidadAgregada}
            disable={disable}
            />

        </div>
    );
};



export default ItemCount;