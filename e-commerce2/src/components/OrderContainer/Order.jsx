import { useGetOrderById } from "../../Hook/useFirebase";
import { useParams, useNavigate } from "react-router-dom";

function Order() {
    const { orderId } = useParams();
    const { order, loading, error } = useGetOrderById(orderId); 
    const navigate = useNavigate();


    if (error) {
        return (
            <div className="w-full max-w-md mx-auto my-8 p-6 bg-base-300 rounded-2xl border border-primary/10 shadow-xl text-center">
                <div className="alert alert-error mb-6 shadow-md py-3 text-sm font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Hubo un error al cargar la orden: {error}</span>
                </div>
                <button onClick={() => navigate('/')} className="btn btn-primary btn-outline btn-block font-bold">
                    Volver al inicio
                </button>
            </div>
        );
    }


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-8 gap-4 min-h-[50vh] text-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-base-content/70 font-semibold tracking-wide">Cargando detalles de la orden...</p>
            </div>
        );
    }


    if (!order) {
        return (
            <div className="w-full max-w-md mx-auto my-8 p-6 bg-base-300 rounded-2xl border border-primary/10 shadow-xl text-center">
                <h2 className="text-2xl font-black text-primary uppercase tracking-wide mb-3">No se encontró la orden</h2>
                <p className="text-base-content/60 mb-6">
                    El código de seguimiento <strong className="font-mono text-base-content bg-base-200 px-2 py-1 rounded">{orderId}</strong> no es válido.
                </p>
                <button onClick={() => navigate('/')} className="btn btn-primary btn-block font-bold">
                    Volver al inicio
                </button>
            </div>
        );
    }


    const fechaFormateada = order.fecha?.toDate 
        ? order.fecha.toDate().toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        : "Fecha no disponible";


    return (
        <div className="w-full max-w-xl mx-auto my-8 p-6 bg-base-300 rounded-2xl border border-primary/10 shadow-xl flex flex-col gap-6">
            
            
            <div className="text-center border-b border-base-100 pb-4">
                <h2 className="text-2xl font-black text-base-content uppercase tracking-wide mb-1">
                    Detalle de la Orden
                </h2>
                <span className="text-xs uppercase font-bold text-base-content/40 tracking-widest block">
                    Resumen de transacción
                </span>
            </div>
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-base-200 p-4 rounded-xl border border-base-100">
                <div>
                    <span className="block text-xs uppercase text-base-content/50 font-bold">ID de Seguimiento</span>
                    <strong className="text-sm font-mono text-secondary tracking-wider block truncate">{order.id}</strong>
                </div>
                <div>
                    <span className="block text-xs uppercase text-base-content/50 font-bold">Fecha de Compra</span>
                    <span className="text-sm font-semibold text-base-content/80 block">{fechaFormateada}</span>
                </div>
            </div>

            
            <div className="p-4 rounded-xl border border-base-100 bg-base-200/50 flex flex-col gap-2">
                <h3 className="text-sm uppercase font-black tracking-wider text-primary border-b border-base-100 pb-1 mb-1">
                    Datos del Cliente
                </h3>
                <p className="text-sm text-base-content/80"><strong className="text-base-content/50">Nombre:</strong> {order.buyer?.nombre}</p>
                <p className="text-sm text-base-content/80"><strong className="text-base-content/50">Teléfono:</strong> {order.buyer?.telefono}</p>
                <p className="text-sm text-base-content/80"><strong className="text-base-content/50">Email:</strong> {order.buyer?.email}</p>
            </div>

            
            <div className="flex flex-col gap-3">
                <h3 className="text-sm uppercase font-black tracking-wider text-primary border-b border-base-100 pb-1">
                    Productos
                </h3>
                
                <ul className="flex flex-col gap-2 divide-y divide-base-100">
                    {order.items && order.items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between pt-2 first:pt-0">
                            <div>
                                <p className="font-bold text-base-content leading-tight">{item.nombre}</p>
                                <span className="text-xs text-base-content/50 font-medium">
                                    {item.quantity || item.cantidad} x ${item.precio}
                                </span>
                            </div>
                            <span className="font-extrabold text-base-content">
                                ${item.precio * (item.quantity || item.cantidad)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            
            <div className="border-t border-base-100 pt-4 mt-2 flex items-center justify-between">
                <div>
                    <span className="text-xs text-base-content/50 block uppercase font-bold">Total Abonado</span>
                    <h3 className="text-3xl font-black text-primary">${order.total}</h3>
                </div>
                
                
                <span className="text-4xl filter grayscale opacity-40">🕶️</span>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button 
                    type="button"
                    onClick={() => navigate(-1)} 
                    className="btn btn-outline btn-primary flex-1 font-bold order-2 sm:order-1"
                >
                    Volver atrás
                </button>

                <button 
                    type="button"
                    onClick={() => navigate('/')} 
                    className="btn btn-primary flex-1 font-bold shadow-lg shadow-primary/20 order-1 sm:order-2"
                >
                    Volver a la Tienda
                </button>
            </div>
            
        </div>
    );
}

export default Order;