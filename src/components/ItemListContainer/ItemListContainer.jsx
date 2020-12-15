import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import './itemlistcontainer.scss'
//import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    
    return(
        <section>
            <h2>{greeting}</h2>
            <p> <span>My mugs</span> es una tienda que ofrece regalos con diseños personalizados. Suministramos regalos de calidad y ofrecemos una amplia gama de opciones en artículos ideales para cualquier ocasión. Contamos con una gran variedad de opciones en cuanto a productos, entre los cuales tenemos: mugs en cerámica, vasos cerveceros, mini mugs, camisetas, gorras, entre otros. Estos productos son ideales para eventos, fiestas y cualquier tipo de celebración.</p>
            <ItemCount stock={10} initial={1}/>
        </section>
    )
}


export default ItemListContainer;