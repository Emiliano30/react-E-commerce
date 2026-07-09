
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonModal({
    text,
    onClick,
    disable,
    cantidadModificada,
    esQuitar,
    idUnico
}) {

    const navigate = useNavigate();

    const modalId = `my_modal_${idUnico}`;

    const [mensaje, setMensaje] = useState("");

    const mostrarModal = () => {

        
        const cantidad = onClick();

        const texto = esQuitar
            ? `Se removieron ${cantidad} productos del carrito.`
            : `Se agregaron ${cantidad} productos nuevos al carrito.`;

        setMensaje(texto);

        setTimeout(() => {
            document.getElementById(modalId)?.showModal();
        }, 0);
    };

    const modalTitle = esQuitar
        ? "¡Productos eliminados!"
        : "¡Productos agregados!";

    return (
        <div>

            <button
                disabled={disable}
                className={`btn btn-block font-bold ${
                    esQuitar
                        ? "btn-error btn-outline"
                        : "btn-primary"
                }`}
                onClick={mostrarModal}
            >
                {text}
            </button>

            <dialog id={modalId} className="modal">

                <div className="modal-box">

                    <h3 className="font-bold text-lg">
                        {modalTitle}
                    </h3>

                    <p className="py-4">
                        {mensaje}
                    </p>

                    <div className="modal-action">

                        <form method="dialog">

                            {esQuitar ? (
                                <button className="btn">
                                    Cerrar
                                </button>
                            ) : (
                                <button
                                    className="btn"
                                    onClick={() => navigate("/")}
                                >
                                    Cerrar
                                </button>
                            )}

                        </form>

                    </div>

                </div>

            </dialog>

        </div>
    );
}

export default ButtonModal;