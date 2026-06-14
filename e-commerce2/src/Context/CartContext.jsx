import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const addToCart = (product,quantity)=>{

        setCart(prevCart => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if(existingProduct){
            return prevCart.map(item => 
            item.id === product.id 
            ? {...item, quantity:item.quantity + quantity} 
            : item)
        }

        return [...prevCart, {...product,quantity}]
        });
    };

    const totalQuantity = cart.reduce((acc,item) => acc + item.quantity,0);
 
    const removeFromCart = (id,quantityToRemove = 1) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if(item.id === id){
                    return {...item,quantity:item.quantity - quantityToRemove};
                };
                return item;
            })
            .filter((item) => item.quantity > 0);
        })
    };

    const clearCart = () => setCart([]);

    const values = {cart,addToCart,totalQuantity, removeFromCart,clearCart}

    return (
       <CartContext.Provider  value={values}>
        {children}
       </CartContext.Provider>
    )
}