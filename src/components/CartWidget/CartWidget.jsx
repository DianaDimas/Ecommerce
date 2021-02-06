import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './cartwidget.scss'
import useCartContext from '../../Context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    const {cartWidgetCount} = useCartContext()
   
        return(
            <>
            
                <Link to= {'/cart'} className='cart-widget'>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <span className="items">{cartWidgetCount()}</span>
                </div>
                </Link>
                
            </>
        )

    

}


export default CartWidget;

