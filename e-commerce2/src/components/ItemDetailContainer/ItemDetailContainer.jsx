import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import { useProductById } from '../../Hook/useFirebase';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const {product,loading,error} = useProductById(id)
    
    if (loading) {
        return (
        <div className="bg-base-200 rounded-box h-full overflow-y-auto p-4">
            <h2 className='text-3xl font-bold my-3'>Mostrando el Producto</h2>
            <Spinner />
        </div>
        );
    }

    if (error) {
        return (
        <div className="bg-base-200 rounded-box h-full overflow-y-auto p-4">
            <h2 className='text-3xl font-bold my-3'>Mostrando el Producto</h2>
            <div className="rounded-3xl border border-error bg-error/10 p-6 text-error">
            Hubo un error al cargar los productos: {error}
            </div>
        </div>
        );
    }
   


    return (
        <div className='p-4'>
            <ItemDetail product={product} />
        </div>
    );
};



export default ItemDetailContainer;