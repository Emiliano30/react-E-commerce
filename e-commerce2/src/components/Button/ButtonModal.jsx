import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function ButtonModal({ text, onClick, disable, cantidadModificada, esQuitar, idUnico}) {

    const [cuerpoModal, setCuerpoModal] = useState("");
    const navigate = useNavigate()

    const modalId = `my_modal_${idUnico}`;

    const mostrarModal = function() {

        const textoFijo = esQuitar 
            ? `Se removieron ${cantidadModificada} productos del carrito.` 
            : `Se agregaron ${cantidadModificada} productos nuevos al carrito.`;

        setCuerpoModal(textoFijo);

        document.getElementById(modalId).showModal();

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

            <dialog id={modalId} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{modalTitle}</h3>
                    <p className="py-4">{cuerpoModal}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {esQuitar 
                            ? <button className="btn">Cerrar</button>
                            :<button className="btn" onClick={()=>navigate('/')}>Cerrar</button>}
                        </form>
                    </div>
                </div>
            </dialog>
        </div> 
    )
}

export default ButtonModal;