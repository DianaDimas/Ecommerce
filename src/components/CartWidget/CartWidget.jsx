import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './cartwidget.scss'
import useCartContext from '../../Context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    const {cartWidgetCount, isInCart} = useCartContext()
   
        return(
            <>
            {isInCart ? 
                <Link to= {'/cart'} className='cart-widget'>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <span className="items">{cartWidgetCount()}</span>
                </div>
                </Link>
                : null
            }
            </>
        )

    

}


export default CartWidget;

