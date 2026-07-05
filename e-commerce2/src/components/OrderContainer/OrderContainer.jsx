import { useGetOrder } from "../../Hook/useFirebase";
import { useNavigate } from "react-router-dom";


function OrderContainer() {
    const { orders, loading, error } = useGetOrder(); 
    const navigate = useNavigate();


    if (error) {
        return (
            <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-base-300 rounded-2xl border border-primary/10 shadow-xl text-center">
                <div className="alert alert-error mb-6 shadow-md py-3 text-sm font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Hubo un error al cargar el historial: {error}</span>
                </div>
                <button onClick={() => navigate('/')} className="btn btn-primary btn-block font-bold">
                    Volver al inicio
                </button>
            </div>
        );
    }


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-8 gap-4 min-h-[50vh] text-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-base-content/70 font-semibold tracking-wide">Cargando órdenes...</p>
            </div>
        );
    }


    return (
        <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-base-300 rounded-2xl border border-primary/10 shadow-xl flex flex-col gap-6">
            
            
            <div className="border-b border-base-100 pb-3">
                <h2 className="text-2xl font-black text-base-content uppercase tracking-wide">
                    Historial de Órdenes
                </h2>
                <span className="text-xs uppercase font-bold text-base-content/40 tracking-widest block mt-1">
                    Listado de compras registradas
                </span>
            </div>

            
            <div className="flex flex-col gap-4">
                {orders && orders.map(order => (
                    <div 
                        key={order.id} 
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-base-200 rounded-xl border border-base-100 hover:border-primary/30 transition-all duration-200 shadow-md group"
                    >

                        <div className="flex flex-col gap-1 w-full sm:w-auto">
                            <span className="text-xs font-mono text-secondary tracking-wider block truncate max-w-50 sm:max-w-xs">
                                ID: {order.id}
                            </span>
                            <p className="text-sm font-semibold text-base-content/80">
                                <strong className="text-base-content/40 uppercase text-xs block font-bold">Comprador</strong>
                                {order.buyer?.nombre}
                            </p>
                        </div>

                        
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-base-100">
                            <div className="text-left sm:text-right">
                                <span className="text-xs uppercase text-base-content/40 font-bold block">Total</span>
                                <span className="font-extrabold text-primary text-lg">${order.total}</span>
                            </div>

                            
                            <button 
                                onClick={() => navigate(`/order/${order.id}`)} 
                                className="btn btn-primary btn-sm px-5 font-bold group-hover:scale-105 transition-transform"
                            >
                                Ver
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default OrderContainer;