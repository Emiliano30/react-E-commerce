import { useState } from "react";

function ButtonModal({ text, onClick, disable, cantidadModificada, esQuitar }) {

    const [cuerpoModal, setCuerpoModal] = useState("");

    const mostrarModal = function() {

        const textoFijo = esQuitar 
            ? `Se removieron ${cantidadModificada} productos del carrito.` 
            : `Se agregaron ${cantidadModificada} productos nuevos al carrito.`;

        setCuerpoModal(textoFijo);

        document.getElementById('my_modal_1').showModal();

        onClick(); 
    }

    const modalTitle = esQuitar ? "¡Productos eliminados!" : "¡Productos agregados!";

    return (
        <div>
            <button 
                disabled={disable} 
                className={`btn btn-block font-bold ${esQuitar ? 'btn-error btn-outline' : 'btn-primary'}`} 
                onClick={mostrarModal}
            >
                {text}
            </button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{modalTitle}</h3>
                    <p className="py-4">{cuerpoModal}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div> 
    )
}

export default ButtonModal;