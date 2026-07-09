
import { useState } from 'react';
import Button from '../Button/Button';
import ButtonModal from '../Button/ButtonModal';

const ItemCount = ({
    handlerAction,
    stockDisponible,
    disable,
    textoBoton = 'Agregar al carrito',
    idUnico
}) => {

    const [count, setCount] = useState(1);
    const [ultimaCantidad, setUltimaCantidad] = useState(1);

    const incrementar = () => {
        if (count < stockDisponible) {
            setCount(prev => prev + 1);
        }
    };

    const decrementar = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const manejarClickAction = () => {
        const cantidad = count;

        setUltimaCantidad(cantidad);

        handlerAction(cantidad);

        setCount(1);

        return cantidad;
    };

    const esQuitar = textoBoton.includes('Quitar');

    return (
        <div className="flex flex-col gap-4 w-full">

            <div className="flex items-center gap-3">

                <Button
                    text="-"
                    disable={disable}
                    callBack={decrementar}
                    className="
                        btn btn-circle btn-outline
                        hover:scale-110 transition-transform
                    "
                />

                <div
                    className="
                        min-w-17.5
                        h-12
                        flex items-center justify-center
                        rounded-2xl
                        bg-base-200
                        text-2xl
                        font-bold
                        shadow-inner
                    "
                >
                    {count}
                </div>

                <Button
                    disable={disable}
                    text="+"
                    callBack={incrementar}
                    className="
                        btn btn-circle btn-primary
                        hover:scale-110 transition-transform
                    "
                />

            </div>

            <ButtonModal
                text={textoBoton}
                disable={disable}
                esQuitar={esQuitar}
                idUnico={idUnico}
                cantidadModificada={ultimaCantidad}
                onClick={manejarClickAction}
            />

        </div>
    );
};

export default ItemCount;