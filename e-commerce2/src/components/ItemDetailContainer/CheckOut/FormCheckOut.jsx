import { useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { useOrder } from "../../../Hook/useFirebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FormCheckOut() {
    const [buyer, setBuyer] = useState({ nombre: '', telefono: '', email: '' });
    const [orderId, setOrderId] = useState(null);
    const [formError, setFormError] = useState(false);

    const navigate = useNavigate();
    
    const { cart, clearCart, totalCart } = useCart();
    const { crearOrder, loading, error } = useOrder(); 

    async function handleSumbit(e) {
        e.preventDefault();
        
        if (!buyer.nombre || !buyer.telefono || !buyer.email) {
            setFormError(true);
            return;
        }

        setFormError(false);

        try {
            const idOrder = await crearOrder(cart, buyer, totalCart);
            setOrderId(idOrder);
            clearCart();
        } catch (err) {
            console.error("Error al procesar la compra:", err);
        }
    }

    function handleInputChange(e) {
        const {name,value}=e.target;
        
        if (formError) setFormError(false);

        if(name === 'telefono'){
            const soloNumeros = value.replace(/[^0-9]/g, "");
            setBuyer({ ...buyer, [name]: soloNumeros });
        }else{
            setBuyer({ ...buyer, [name]: value });
        }
    }



    if (orderId) {
        return (
            <div className="bg-base-300 min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-xl mx-auto rounded-2xl border border-primary/20 shadow-xl my-8">
                <div className="text-6xl mb-4">🕶️</div>
                <h2 className="text-3xl font-black text-primary uppercase tracking-wide mb-3">¡Muchas gracias por tu compra!</h2>
                <p className="text-base-content/80 text-lg mb-6">Tu pedido ha sido registrado con éxito en las sombras.</p>
                
                <div className="bg-base-200 p-4 rounded-xl border border-base-100 w-full mb-8">
                    <span className="block text-xs uppercase text-base-content/50 font-bold mb-1">Código de seguimiento</span>
                    <strong className="text-xl font-mono text-secondary tracking-wider selection:bg-primary selection:text-primary-content">
                        {orderId}
                    </strong>
                </div>

                <Link to="/" className="btn btn-primary px-8 font-bold shadow-lg shadow-primary/20">
                    Volver a la tienda
                </Link>
            </div>
        );
    }




    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 gap-4 min-h-[50vh] text-center">
                <h2 className="text-2xl font-bold text-base-content/70">No hay productos en el carrito</h2>
                <p className="text-base-content/50 max-w-sm">Agregá algunos productos para poder realizar el checkout.</p>
                <Link to="/" className="btn btn-primary font-bold mt-2">Ver Productos</Link>
            </div>
        );
    }



    return (
        <div className="w-full max-w-md mx-auto my-8 p-6 bg-base-300 rounded-2xl border border-primary/10 shadow-xl">
            <h2 className="text-2xl font-black text-base-content uppercase tracking-wide border-b border-base-100 pb-3 mb-6 text-center">
                Finalizar Pedido
            </h2>
            
            <form onSubmit={handleSumbit} className="flex flex-col gap-4">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-base-content/70">Nombre Completo</span>
                    </label>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Ej. Juan Pérez" 
                        value={buyer.nombre} 
                        onChange={handleInputChange} 
                        className={`input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none font-medium transition-all ${
                            formError && !buyer.nombre ? "input-error border-error" : ""
                        }`}
                    />
                </div>

                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-base-content/70">Teléfono de Contacto</span>
                    </label>
                    <input 
                        type="text" 
                        name="telefono" 
                        placeholder="Ej. 11 2345 6789" 
                        value={buyer.telefono} 
                        onChange={handleInputChange} 
                        className={`input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none font-medium transition-all ${
                            formError && !buyer.telefono ? "input-error border-error" : ""
                        }`}
                    />
                </div>

                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-base-content/70">Correo Electrónico</span>
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="ejemplo@correo.com" 
                        value={buyer.email} 
                        onChange={handleInputChange} 
                        className={`input input-bordered w-full bg-base-200 focus:border-primary focus:outline-none font-medium transition-all ${
                            formError && !buyer.email ? "input-error border-error" : ""
                        }`}
                    />
                </div>
                
                
                {formError && (
                    <p className="text-error text-xs font-bold text-center mt-2 animate-pulse">
                        ⚠️ Por favor, completá todos los campos obligatorios.
                    </p>
                )}

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <button 
                        type="button" 
                        onClick={() => navigate(-1)} 
                        className="btn btn-outline btn-primary flex-1 font-bold order-2 sm:order-1"
                    >
                        Volver atrás
                    </button>

                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="btn btn-primary flex-1 font-bold shadow-lg shadow-primary/20 gap-2 order-1 sm:order-2"
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Procesando...
                            </>
                        ) : (
                            "Confirmar Compra"
                        )}
                    </button>
                </div>
            </form>

            {error && (
                <div className="alert alert-error mt-4 shadow-md py-3 text-sm font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Hubo un error: {error}</span>
                </div>
            )}
        </div>
    );
}

export default FormCheckOut;