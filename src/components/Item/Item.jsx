import React from "react"
import './item.scss'



const Item = ({item: { id, name, description, img }}) => {
    return(
        <div className="card-product">
            <img src={img} alt={id} width="350" />
            <h2>{name}</h2>
            <p>{description}</p>
            <button>Agregar</button>
        </div>
    )
    
}
export default Item