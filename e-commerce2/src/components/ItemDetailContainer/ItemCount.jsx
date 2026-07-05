import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import ButtonModal from '../Button/ButtonModal';
import { Fullscreen } from '@boxicons/react';




const ItemCount = ({handlerAction,stockDisponible,disable, textoBoton = 'Agregar al carrito'}) => {
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

    const manejarClickAction = function(){
        if(disable) return
        handlerAction(count);
        setCount(1);
    }

    const esQuitar = textoBoton.includes('Quitar');

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
            text={textoBoton} 
            onClick={manejarClickAction} 
            cantidadModificada={count}
            disable={disable}
            esQuitar={esQuitar}
            />

        </div>
    );
};



export default ItemCount;