import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({setCarrito}) => {
    const [producto,setProducto] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        fetch('/productos.json')
        .then(response => response.json())
        .then((data)=>{
            const encontrado = data.find(prod => prod.id === parseInt(id))
            if(!encontrado){
                console.log('producto no encontrado')
            }
            setProducto(encontrado)
        })
        .catch(error => console.error('Error al traer el detalle:',error))
    },[id])





    return (
        <div className='p-4'>
            <ItemDetail setCarrito={setCarrito} {...producto} />
        </div>
    );
};



export default ItemDetailContainer;