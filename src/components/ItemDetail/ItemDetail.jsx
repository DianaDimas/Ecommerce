import React, {useContext, useEffect} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import './itemdetail.scss'
import {CartContext} from '../../Context/CartContext';

const ItemDetail = ({item}) => {

    const {id, name, description, img, price} = item
    const {add, initial, stocks, stock, setStock, setCount, setToggleItem, toggleItem} = useContext(CartContext)

    useEffect(() => {
        setStock(stocks)
        setCount(initial)
        setToggleItem(!toggleItem)
    // eslint-disable-next-line    
    },[])


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={img} alt={id} width="350" />
            </div>
            <div className="info-detail">
                <h3>{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                <p>Unidades Disponibles: {stock}</p>
                {add ? <Link to= {'/cart'}><button className="btn-finalizar">Comprar Ahora</button></Link> :
                    <ItemCount stocks={stocks}
                    item = {{
                        id: id,
                        name: name,
                        description: description, 
                        img:img,
                        price: price
                    }}
                    />
                }
                
            </div>
        </div>
           
    )
}

export default ItemDetail