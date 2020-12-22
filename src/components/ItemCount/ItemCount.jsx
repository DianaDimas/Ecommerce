import React from "react"
import './itemcount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({stock, initial}) =>{
    const [contador, setContador] = React.useState(initial);
    

    const onAdd = () => { setContador(contador + 1) }
    const onRest = () => { setContador(contador - 1) }

    return(
        <div className="card-count">
            <h3>Item</h3>
            <div className="_grid">
              <button className="_btn _column product-subtract" onClick={onRest} disabled={contador === initial} ><FontAwesomeIcon icon={faMinus} /></button>
              <div className="_column product-qty">{contador}</div>
              <button className="_btn _column product-plus" onClick={onAdd} disabled={contador === stock} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <button className="_btn product-add" disabled>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount