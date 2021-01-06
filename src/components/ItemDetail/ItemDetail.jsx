import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import './itemdetail.scss'

const ItemDetail = ({item: { id, name, description, img, price }}) => {
    const stocks = 10
    const initial = 0
    const [stock, setSotck] = useState(stocks)
    const [count, setCount] = useState(initial)
    const [add, setAdd] = useState(false)

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

    const onAdd = () =>{
        if (count <= stocks){
            setAdd(true)
        }
    }


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
                    <ItemCount stock={stocks}
                    initial={initial}
                    count={count}
                    increase={increase}
                    decrease={decrease}
                    onAdd={onAdd}
                    />
                }
                
            </div>
        </div>
           
    )
}

export default ItemDetail