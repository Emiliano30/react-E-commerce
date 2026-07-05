import { useState } from "react";
import Button from "../Button/Button";
import CardWrapper from "./CardWrapper";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import ItemCount from "../ItemDetailContainer/ItemCount";

function ProductCard({ product, isCartItem = false, onRemove }) {

    const {removeFromCart} = useCart()

    if (isCartItem) {
        return (
            <CardWrapper>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 w-full bg-base-200 rounded-2xl border border-base-300">

                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <img
                            src={product.img}
                            alt={product.nombre}
                            className="w-20 h-20 object-cover rounded-xl border border-base-100 shrink-0"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-base-content">{product.nombre}</h2>
                            <p className="text-sm text-base-content/60">${product.precio} c/u</p>
                        </div>
                    </div>


                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-base-300">
                        <div className="text-center sm:text-right">
                            <span className="block text-sm text-base-content/60">Cantidad</span>
                            <span className="font-bold text-md badge badge-neutral p-3">{product.quantity}</span>
                        </div>

                        <div className="text-center sm:text-right min-w-20">
                            <span className="block text-sm text-base-content/60">Total</span>
                            <span className="font-extrabold text-primary">${product.precio * product.quantity}</span>
                        </div>


                        <div className="flex flex-col items-center gap-3">
                            <ItemCount 
                                stockDisponible={product.quantity}
                                textoBoton="Quitar del carrito"
                                handlerAction={(cantidadARestar) => removeFromCart(product.id, cantidadARestar)}
                            />

                            
                            <Link 
                                to={`/item/${product.id}`}
                                className="w-full max-w-50 py-2 rounded-lg text-xs font-bold text-center
                                border border-primary text-primary bg-transparent 
                                hover:bg-primary hover:text-black
                                transition-all duration-300 ease-in-out"
                            >
                                Ir al producto
                            </Link>
                        </div>

                    </div>
                </div>
            </CardWrapper>
        );
    }


    return (
        <CardWrapper>
            <div className="group relative w-full overflow-hidden rounded-2xl aspect-4/3">
                <img
                    src={product.img}
                    alt={product.nombre}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                
                <div className="
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
                ">
                    <h2 className="text-2xl font-bold">{product.nombre}</h2>
                    <p className="mt-2">{product.description}</p>
                    <p>${product.precio}</p>

                    <Link
                        to={`/item/${product.id}`}
                        className="group flex w-24 items-center px-4 py-3 rounded-2xl 
                        bg-primary hover:bg-base-100
                        transition-all duration-300 ease-in-out
                        shadow-sm hover:shadow-lg hover:-translate-y-1
                        font-semibold text-center"
                    >
                        Comprar
                    </Link>
                </div>
            </div>
        </CardWrapper>
    );
}

export default ProductCard;