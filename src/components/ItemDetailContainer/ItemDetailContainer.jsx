  
import React from 'react';
import Products from '../../listProducts';
import ItemDetail from '../ItemDetail/ItemDetail' ;

const getItems = new Promise((res, rej)=>{
    setTimeout(() => {
        res(Products)
    }, 2000);
})
const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = React.useState()

    React.useEffect(()=>{
        getItems.then((Products)=>{
            setItemDetail(Products[0])
        })

    },[])


    return(
        <>
        
            {itemDetail ? <ItemDetail item={itemDetail} /> : null}

        </>
        
)   
}
export default ItemDetailContainer;