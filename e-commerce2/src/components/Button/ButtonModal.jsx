

function ButtonModal({text,agregarCarrito,cantidadAgregada,disable}){
    const mostrarModal = function(){
        document.getElementById('my_modal_1').showModal();
        agregarCarrito()
    }
    return(
        <div>
            <button disabled={disable} className="btn" onClick={mostrarModal}>{text}</button>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Productos agregados!</h3>
                <p className="py-4">Se agregaron {cantidadAgregada} productos nuevos al carrito</p>
                <div className="modal-action">
                <form method="dialog">
                    
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div> 
    )
}

export default ButtonModal