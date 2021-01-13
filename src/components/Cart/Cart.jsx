import React, {useContext} from 'react';
import './cart.scss'
import {CartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom';
import ItemCart from '../ItemCart/itemCart'

const Cart = () => {
    const {cart} = useContext(CartContext)
   
    return(
        <section className="carritoCompras">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continue">Continuar Comprando</button>
                </Link>
            </div>
            <div className="wrap cf">
                <div className="cart">
                    <ul className="cartWrap">
                        {cart.map((itemCart) => <li className="items"> <ItemCart key={itemCart.item.id} itemDetails={itemCart} /></li>)}
                    </ul>
                </div>
            </div>
        </section>

    )
}
export default Cart;