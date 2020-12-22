import React, {useState, useEffect} from 'react';
import ItemCount from "../ItemCount/ItemCount"
import ItemList from '../itemList/ItemList';
import Products from "../../listProducts";
import './itemlistcontainer.scss'

const listProducts = new Promise (
    (result, reject) => setTimeout(() => result(Products), 2000)

);


const ItemListContainer = ({greeting}) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        listProducts.then(setList)
    }, [])
    
    return(
        <section>
            <h2>{greeting}</h2>
            <p> <span>My mugs</span> es una tienda que ofrece regalos con diseños personalizados. Suministramos regalos de calidad y ofrecemos una amplia gama de opciones en artículos ideales para cualquier ocasión. Contamos con una gran variedad de opciones en cuanto a productos, entre los cuales tenemos: mugs en cerámica, vasos cerveceros, mini mugs, camisetas, gorras, entre otros. Estos productos son ideales para eventos, fiestas y cualquier tipo de celebración.</p>
            <ItemCount stock={10} initial={1}/>
            <ItemList list={list} />
        </section>
        
    )
}


export default ItemListContainer;