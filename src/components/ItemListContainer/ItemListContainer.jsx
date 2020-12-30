import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import Products from "../../listProducts";

const listProducts = new Promise (
    (result, reject) => setTimeout(() => result(Products), 2000)

);


const ItemListContainer = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        listProducts.then(setList)
    }, [])
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}


export default ItemListContainer;