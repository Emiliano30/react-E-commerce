import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { data } from 'react-router-dom';


function ItemListContainer () {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    fetch('/productos.json')
    .then(response => response.json())
    .then(data => setProductos(data))
    .catch((error)=> console.log('Error al cargar los productos'))

    
  },[])
  return (
    <div className="bg-base-200 rounded-box h-full overflow-y-auto p-4">
      <h2 className='text-3xl font-bold my-3'>Lista de Productos</h2>
      <ItemList productos={productos}/>
    </div>
  );
}

export default ItemListContainer;