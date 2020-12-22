import React from "react";
import Item from "../Item/Item";
import './itemlist.scss'

const ItemList =({list}) => {
    return(
        <section className="product-list">
            {list.map(product => 
                <Item key={product.id} item={product}/>
            )}
        </section>
        
    )
}

export default ItemList;