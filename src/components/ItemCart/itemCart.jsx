import React, {useContext} from 'react'
import {CartContext} from '../../Context/CartContext'
import './itemcart.scss'

const ItemCart = ({itemDetails}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <div className="infoWrap">
            <div className="cartSection">
                <p className="itemNumber">{itemDetails.item.id}</p>
                    <h3>{itemDetails.item.name}</h3>
                <p> <input type="text"  className="qty" placeholder={itemDetails.quantity}/> x {itemDetails.item.price}</p>
            </div>  
                                                            
            <div className="cartSection removeWrap">
                <button className="remove" id={itemDetails.item.id} onClick={removeItem}>x</button>
            </div>
        </div>
    )
}

export default ItemCart