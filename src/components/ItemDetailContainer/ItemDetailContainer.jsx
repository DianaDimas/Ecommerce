import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Products} from '../../listProducts';
import ItemDetail from '../ItemDetail/ItemDetail' ;

const getItem = (productId) => {
    return new Promise(result =>  setTimeout(() => 
        { result(Products.find(product =>
            product.id===parseInt(productId)))  
        },500)) 
} 

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    
    const {productId} = useParams();
    
    useEffect(() =>{
        setLoading(true);
        getItem(productId).then((product) => {
            setItem(product);
            setLoading(false)    
        });

    }, [productId])

    
    return(
        <>
        
        {loading ? "Cargando Información..." : <ItemDetail item={item} />}

        </>
        
)   
}
export default ItemDetailContainer;