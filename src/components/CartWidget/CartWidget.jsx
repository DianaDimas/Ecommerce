import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './cartwidget.scss'
//import { render } from "react-dom";

class CartWidget extends Component{
    render(){
        return(
            <div>
               <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
        )

    }

}


export default CartWidget;

