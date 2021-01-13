  
import React, {useContext} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail' ;
import {CartContext} from '../../Context/CartContext';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const {loading, allProducts} = useContext(CartContext)
    console.log(allProducts)
    const productId = useParams()
    console.log(productId)
                
    return(
        <>
            { loading ? 
                "Cargando Información..." : allProducts.map((product)=>{
                    return(
                        product.id ===productId.id ? 
                        <ItemDetail 
                            key={product.id}
                            item={{
                                    id: product.id,
                                    name : product.name,
                                    description : product.description,
                                    price : product.price,
                                    productId: productId.id
                                }}
                        /> 
                        : "null"
                    )
                })
            }
        </>
    )   
}
export default ItemDetailContainer;