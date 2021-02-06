  
import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import useCartContext from '../../Context/CartContext'
import './itemdetail.scss'

const ItemDetail = ({item}) => {
    const stocks = item.stock
    const initial = 1
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addItem } = useCartContext()
    

    const itemQuantity = (count) => {
        setQuantity(count)
    }

    const addToCart = () => {
        addItem(item, quantity)
        setAdd(true)
    }


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={item.img} alt={item.id}/>
            </div>
            <div className="info-detail">
                <h3>{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">{item.price}</p>
                <ItemCount stocks={stocks}
                    initial={initial}
                    onAdd={itemQuantity}
                />
                <button className="btn" onClick={addToCart}>Agregar al Carrito</button>
                {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : null}
            </div>
        </div>
           
    )
}

export default ItemDetail