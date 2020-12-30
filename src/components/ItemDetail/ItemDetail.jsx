import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import './itemdetail.scss'

const ItemDetail = ({item: { id, name, description, img, price }}) => {
    

    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={img} alt={id} width="350" />
            </div>
            <div className="info-detail">
                <h3>{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
           
    )
}

export default ItemDetail