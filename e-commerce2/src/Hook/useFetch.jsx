import { useState, useEffect } from "react";

function useFetch(url){
    const [data,setData] = useState({categorias:[],productos:[]});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data) => {
            setTimeout(()=>{
                setData(data);
                setLoading(false)
            },1000)
        })
        .catch((error)=>{
            setTimeout(()=>{
                setError(error.message);
                setLoading(false)
            },1000)
        })
    },[url]);

    return {data,loading,error};
}

export default useFetch