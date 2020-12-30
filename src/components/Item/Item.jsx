import React from "react"
import { Link } from 'react-router-dom'
import './item.scss'



const Item = ({item: { id, name, description, img }}) => {
    return(
        <div className="card-product">
            <img src={img} alt={id} width="350" />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/item/${id}`}> <button>Ver Detalle</button> </Link>
            
        </div>
    )
    
}
export default Item