import { DockTop } from "@boxicons/react";
import { useNavigate } from "react-router-dom";
import { useGetOrder } from "../../Hook/useFirebase";


function OrderWidget(){

    const { orders, loading } = useGetOrder();
    const navigate = useNavigate();


    if (loading || !orders || orders.length === 0) {
        return null; 
    }

    return (
        <div className="dropdown dropdown-end mr-4" onClick={() => navigate('/order')}>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                   
                    <span className="badge badge-sm badge-primary indicator-item">
                        {orders.length}
                    </span>
                    <DockTop />
                </div>
            </div>
        </div>
    );
}

export default OrderWidget;