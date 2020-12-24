import React from 'react'
import Item from '../Item/Item'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {
    

    return (
        <>
        <Item item={item} />
        <ItemCount stock={10} initial={1}/>
        </>
            
    )
}

export default ItemDetail