import { useState } from "react";
import { Cart } from "@boxicons/react";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function CartWidget(){

    const {totalQuantity} = useCart()
    const navigate = useNavigate()
    return(
    <div className="dropdown dropdown-end mr-4" onClick={()=> navigate('/cart')}>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
                <Cart></Cart>
                <span className={`badge badge-sm badge-primary indicator-item ${totalQuantity > 0 ? '' : 'hidden'}`}>{totalQuantity}</span>
            </div>
        </div>
    </div>
    );
}

export default CartWidget