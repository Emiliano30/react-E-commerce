import useFetch from "../../Hook/useFetch"
import ProductCard from '../CardWrapper/ProductCard';
import ItemList from "./ItemList";
import Spinner from '../Spinner/Spinner';
import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import { useParams } from 'react-router-dom';



function ItemListContainer () {
  const { data, loading, error } = useFetch('/productos.json');
  const [busqueda,setBusqueda] = useState("");

  const {categoriaId} = useParams()


  function handleBusqueda(texto){
    setBusqueda(texto)
  }

  const resultados = data.productos
  .filter((p) =>
    categoriaId
      ? p.categoria_id === Number(categoriaId)
      : true
  )
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


      <Input
        type='text'
        placeholder='Buscar...'
        onChange={handleBusqueda}
        value={busqueda}
        
      />


      {resultados.length > 0 
      ? <ItemList productos={resultados}/>
      : <p>No hay productos</p>}
      
    </div>
  );
}

export default ItemListContainer;