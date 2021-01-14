  
import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import useCartContext from '../../Context/CartContext'
import './itemdetail.scss'

const ItemDetail = ({item}) => {
    const stocks = 10
    const initial = 1
    const [stock, setSotck] = useState(stocks)
    const [count, setCount] = useState(initial)
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useCartContext()

    const increase = () => { 
        if(count < stocks){
            setCount(count + 1)
            setSotck(stock - 1)
        }
    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
            setSotck(stock + 1)
        }
    }

    const onAdd = () => {
        if (count <= stocks){
            setAdd(true)
            setQuantity(count)
            
            
        }console.log(quantity)
    }

    const addToCart = () => {
        addItem(item, quantity)
        console.log(quantity)
    }


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={item.img} alt={item.id} width="350" />
            </div>
            <div className="info-detail">
                <h3>{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">{item.price}</p>
                <p>Unidades Disponibles: {stock-initial}</p>
                <ItemCount stock={stocks}
                    initial={initial}
                    count={count}
                    increase={increase}
                    decrease={decrease}
                    onAdd={onAdd}
                    />
                {add ? <Link to= {'/cart'}><button className="btn-finalizar" onClick={addToCart}>Comprar Ahora</button></Link> : null}
                
            </div>
        </div>
           
    )
}

export default ItemDetail