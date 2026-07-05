import ProductCard from "../CardWrapper/ProductCard";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, totalCart, clearCart } = useCart();

    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 gap-4 min-h-[50vh]">
                <h2 className="text-2xl font-bold text-base-content/70">Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary font-bold">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-6">
            <h1 className="text-3xl font-extrabold text-base-content tracking-wide uppercase border-b border-base-300 pb-2">
                Tu Carrito
            </h1>

            <ul className="flex flex-col gap-4">
                {cart.map((product) => (
                    <li key={product.id}>
                        <ProductCard 
                            product={product} 
                            isCartItem={true} 
                            onRemove={removeFromCart} 
                        />
                    </li>
                ))}
            </ul>

            <div className="bg-base-300 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4 border border-primary/10">
                <div>
                    <span className="text-sm text-base-content/60 block uppercase font-semibold">Total general</span>
                    <span className="text-3xl font-black text-primary">${totalCart}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:w-auto w-full">
                    
                    <button 
                        onClick={clearCart} 
                        className="btn btn-outline btn-ghost border-base-content/20 font-bold w-full sm:w-auto"
                    >
                        Limpiar Carrito
                    </button>

                    
                    <button 
                    onClick={()=>navigate('/checkout')}
                        className="btn btn-primary font-bold px-8 shadow-lg shadow-primary/20 w-full sm:w-auto"
                    >
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;