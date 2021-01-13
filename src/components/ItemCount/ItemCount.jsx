import React, { useContext } from "react"
import './itemcount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../Context/CartContext';

const ItemCount = ({stocks, item}) =>{
   
    const{count, initial, increase, decrease, setAdd, setStock, add, stock, cart, setCart} = useContext(CartContext)
    
    const onAdd = () =>{
        setAdd(!add)
        setStock(stock-count)
        
        if (cart.length === 0){
            setCart([{id: item.id, item:item, quantity:count}])
        } else {
            setCart(cart => [...cart, {id: item.id, item:item, quantity:count} ])
        }

    }

    return(
        <div className="card-count">
            <h5>Cantidad:</h5>
            <div className="_grid">
              <button className="_btn _column product-subtract" onClick={decrease} disabled={count === initial} ><FontAwesomeIcon icon={faMinus} /></button>
              <div className="_column product-qty">{count}</div>
              <button className="_btn _column product-plus" onClick={increase} disabled={count === stocks} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <button className="_btn product-add" onClick={onAdd} disabled={count === 0}>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount