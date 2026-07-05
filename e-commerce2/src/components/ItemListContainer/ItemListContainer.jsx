import ItemList from "./ItemList";
import Spinner from '../Spinner/Spinner';
import { useState } from 'react';
import Input from '../Input/Input';
import { useParams } from 'react-router-dom';
import { useProducts } from "../../Hook/useFirebase";



function ItemListContainer () {

  const [busqueda,setBusqueda] = useState("");

  const {categoriaId} = useParams()

  const {products,loading,error} = useProducts(categoriaId)



  function handleBusqueda(texto){
    setBusqueda(texto)
  }

  const resultados = products
  .filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  

  if (loading) {
    return (
      <div className="bg-base-200 rounded-box h-full overflow-y-auto p-4">
        <h2 className='text-3xl font-bold my-3'>Lista de Productos</h2>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-base-200 rounded-box h-full overflow-y-auto p-4">
        <h2 className='text-3xl font-bold my-3'>Lista de Productos</h2>
        <div className="rounded-3xl border border-error bg-error/10 p-6 text-error">
          Hubo un error al cargar los productos: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-200 rounded-box h-full overflow-y-auto p-4">
      <h2 className='text-3xl font-bold my-3'>Lista de Productos</h2>


      <div className="mb-6 max-w-md">
        <Input
          type='text'
          placeholder='Buscar...'
          onChange={handleBusqueda}
          value={busqueda}
        />
      </div>


      {resultados.length > 0 
      ? <ItemList productos={resultados}/>
      : <p>No hay productos</p>}
      
    </div>
  );
}

export default ItemListContainer;