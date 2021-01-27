import React, { useState } from 'react';
import './cart.scss'
import useCartContext from '../../Context/CartContext'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase/app"
import "firebase/firestore"
import { getFirestore } from '../../firebase'
import Formulario from '../Formulario/Formulario'

const Cart = () => {
    const {products, removeItem, totalProductsPrice, isInCart, cleanListCart} = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState("")
    
    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    const handleFinalize = () =>{
        setShowForm(true)
    }

    /* const createOrder = (buyer) =>{
        const newOrder = {
            buyer,
            products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductsPrice()
        }
        const db = getFirestore()
        const orders = db.collection('order')
        orders.add(newOrder).then(
            ({id}) => {
                setOrderId(id)
                setConfirmation(true)
            }
        ).catch((e) => {console.log(e)})

    } */

    async function createOrder(buyer){

        /* let orderInfo =[]
        products.map((itemInfo) => {
            for (let i = 0; i < itemInfo.quantity; i++ ){
                orderInfo.push({
                    id: itemInfo.id,
                    name: itemInfo.name,
                    quantity: itemInfo.quantity,
                    price: itemInfo.price
                })
            }
        }) */
        const newOrder = {
            buyer,
            products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductsPrice()
        }
        console.log("order", newOrder)
        const db = getFirestore()
        const orders = db.collection('order')
        
        try {
            const doc = await orders.add(newOrder)
            setOrderId(doc.id)
            setConfirmation(true)
            
        } catch(e){
            console.log("Error creando la orden: ", e)
        }
    }

    console.log(confirmation)
    if(confirmation){
        alert('Su No. de Orden ' + orderId + ' ha sido confirmada')
        cleanListCart()
    }
    
        
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
                    <div className="totals-item">
                        <button className ="checkout" onClick={handleFinalize}>Iniciar Compra</button>
                    </div>
                    {showForm ? <Formulario createOrder={createOrder}/> : null}
                </div>
                : "...No hay productos agregados al Carrito..."
            }
                                                
        </section>

    )
}
export default Cart;