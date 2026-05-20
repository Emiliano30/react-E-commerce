import { useState } from "react";
import { Cart } from "@boxicons/react";


function CartWidget({cantidad}){

    return(
    <div className="dropdown dropdown-end mr-4">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
                <Cart></Cart>
                <span className={`badge badge-sm indicator-item ${cantidad > 0 ? '' : 'hidden'}`}>{cantidad}</span>
            </div>
        </div>
        <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
                <span className="text-lg font-bold">{cantidad} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CartWidget