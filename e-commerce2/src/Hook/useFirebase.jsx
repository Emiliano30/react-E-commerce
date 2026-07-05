import { useState, useEffect } from 'react';
import {collection, getDoc, getDocs, doc, query, where, addDoc, serverTimestamp, onSnapshot} from 'firebase/firestore';
import {db} from '../services/firebaseConfig.js';





export const useProducts = (categoriaId) =>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{

        const productsCollection = collection(db,'productos')
        const productsRef = categoriaId 
        ? query(productsCollection, where('categoria_id','==', categoriaId)) 
        : productsCollection;

        getDocs(productsRef)
            .then((resp)=> {
                const data = resp.docs.map(doc => ({id:doc.id, ...doc.data()}));
                setProducts(data);
                setLoading(false);
            })
            .catch((error)=>{
                setError(error.message);
                setLoading(false)
            })

        
    },[categoriaId])

    return {products,loading,error};
}


export const useProductById = (id) => {
    const [product, setProduct] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{

        if(!id) return;

        const docRef = doc(db,'productos', id);
        getDoc(docRef)
        .then((resp)=>{
            if(resp.exists()){
                setProduct({id:resp.id,...resp.data()})
                setLoading(false)
            }else{
                setProduct(null)
                setLoading(false)
            }
        })
        .catch((error)=>{
            setError(error);
            setLoading(false)
        })

    },[id])

    return {product,error,loading}
}

export const useCategorias = () =>{
    const [categorias,setCategorias] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const categoriasRef = collection(db,'categorias');
        getDocs(categoriasRef)
        .then((resp)=>{
            const data = resp.docs.map((doc)=>({id:doc.id,...doc.data()}));
            setCategorias(data);
            setLoading(false)
        })
        .catch((error)=>{
            setError(error);
            setLoading(false)
        });
    },[]);

    return {categorias, loading, error};
}


export const useOrder = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const crearOrder = async (cart, buyer, totalcart) => {
        setLoading(true);
        try {
            const order = {
                buyer,
                items: cart.map((item) => ({
                    id: item.id,
                    nombre: item.nombre,
                    precio: item.precio,
                    cantidad: item.quantity
                })),
                total: totalcart,
                fecha: serverTimestamp()
            };


            const orderRef = collection(db, 'ordenes');
            const docRef = await addDoc(orderRef, order);

            setLoading(false);
            return docRef.id;

        } catch (error) {
            setError(error.message);
            setLoading(false);
            throw error;
        }
    };

    return { crearOrder, loading, error };
};

export const useGetOrder = ()=>{
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const q = query(collection(db,'ordenes'));
        
        const unsubcribe = onSnapshot(q,(querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({id:doc.id,...doc.data()})
            });
 
            setOrders(docs);
            setLoading(false)
        },
            (err) => {
                setError(err.message);
                setLoading(false)
        });

        return ()=>unsubcribe()
        
    },[]);

    return {orders,loading,error}
}

export const useGetOrderById = (id)=>{
    const [order,setOrder] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(!id) return;

        const orderRef = doc(db,'ordenes',id);
        getDoc(orderRef)
        .then((resp)=>{
            if(resp.exists()){
                setOrder({id:resp.id,...resp.data()});
                setLoading(false)
            }else{
                setLoading(false)
            }
        })
        .catch((error)=>{
            setError(error);
            setLoading(false)
        })
    },[id]);

    return {order,loading,error}
}


