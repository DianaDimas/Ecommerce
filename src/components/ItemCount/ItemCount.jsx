import React, {useState} from "react"
import './itemcount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({stocks,  initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
       
    const increase = () => { 
        if(count < stocks){
            setCount(count + 1)
            
        }
        
    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
        }
    }

    onAdd(count)

    return(
        <div className="card-count">
            <h5>Cantidad:</h5>
            <div className="grid">
              <button className="column product-subtract" onClick={decrease} disabled={count === initial} ><FontAwesomeIcon icon={faMinus} /></button>
              <div className="column product-qty">{count}</div>
              <button className="column product-plus" onClick={increase} disabled={count === stocks} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <p>Unidades Disponibles: {stocks - count}</p>
        </div>
    )
}
export default ItemCount