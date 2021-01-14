import React from 'react';
import './cart.scss'
import useCartContext from '../../Context/CartContext'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const {products, removeItem, totalProductsPrice, isInCart} = useCartContext()
    

    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    console.log(isInCart)
     
   
    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continue">Continuar Comprando</button>
                </Link>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className="product-details">{item.name}</div> 
                        <div className="product-quantity">
                            <input type="text" placeholder={item.quantity}/>
                        </div>
                        <div className="product-price">{item.price}</div>
                        <div className="product-removal">
                            <button class="remove-product" onClick={()=>handleRemove(item)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                        <div className="product-line-price">{item.quantity*item.price}</div>
                    </div>
                    )
                )}

            </div>

            {isInCart ?
                <div className="totals" >
                    <div class="totals-item">
                        <label>Subtotal</label>
                        <div class="totals-value">{totalProductsPrice()}</div>
                    </div>
                    <div class="totals-item">
                        <label>Costo de envío</label>
                        <div class="totals-value">5000</div>
                    </div>
                    <div class="totals-item t-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">{totalProductsPrice() + 5000}</div>
                    </div>
                </div>
                : "...No hay productos agregados al Carrito..."
            }
        </section>

    )
}
export default Cart;