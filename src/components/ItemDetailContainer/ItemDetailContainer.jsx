import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
//import {Products} from '../../listProducts';
import ItemDetail from '../ItemDetail/ItemDetail' ;
import { getFirestore } from '../../firebase'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    
    const {productId} = useParams();
    
    useEffect(() =>{
        
        const db = getFirestore()
        const getItem = db.collection("ItemCollection").doc(productId)

        getItem.get().then((querySnapshot) => {
            setItem({id:querySnapshot.id, ...querySnapshot.data()})
            setLoading(false) 
        })
        .catch((e) => {console.log(e)})

    }, [productId])

    
    return(
        <>
        
        {loading ? "Cargando Información..." : <ItemDetail item={item} />}

        </>
        
)   
}
export default ItemDetailContainer;