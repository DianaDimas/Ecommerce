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
    const {products, removeItem, totalProductsPrice, cleanListCart} = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)
    
    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    const handleFinalize = () =>{
        setShowForm(true)
    }

    const createOrder = (buyer) =>{
        const db = getFirestore()
        const orders = db.collection('order')

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
        
        orders.add(newOrder).then(({id}) => {
                setOrderId(id)
                setConfirmation(true)
                
            }
        ).catch((e) => {console.log(e)})

        /* const itemsToUpdate = db.collection("ItemCollection").where(
            firebase.firestore.FieldPath.documentId(),
            'in',
            products.map((i) => i.id)
        )
        const query = itemsToUpdate.get()
        const batch = db.batch()
        const outOfStock = []

        query.docs.forEach((docSnapshot, idx) => {
            if (docSnapshot.data().stock >= products[idx].quantity) {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - products[idx].quantity,
                })
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
            }
        })
        if (outOfStock.length === 0) {
            batch.commit()
        } */
        const Itemscollection = db.collection("ItemCollection")
        const batch = getFirestore().batch()

        products.forEach( p => {
            batch.update(Itemscollection.doc(p.id),{stock:p.stock - p.quantity})
        })
        batch.commit()
            .then(()=>{
                    console.log("Termino bien")
                    cleanListCart()
            })
            .catch(err=>console.log(err))
        
    }

    console.log("Confirmacion",confirmation)
    console.log("orderId",orderId)
    
    if(products.length === 0 && orderId === ""){
        return (
            <div className="cart">
                <div className="heading cf">
                    <h3>...No hay productos agregados al Carrito...</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>
                
            </div>
        )
    }else if(orderId && confirmation){
        return(
            <div className="cart">
                <div className="heading cf">
                    <h3>Su Orden No. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>
            </div>
        )
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
                        <div className="product-details">
                            <h2>{item.name}</h2>
                            <div className="product-removal">
                                <button class="remove-product" onClick={()=>handleRemove(item)}> 
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div> 
                        <div className="product-price">
                            <label htmlFor="price">Precio </label>
                            <span className="price">COP ${item.price}</span>
                        </div>
                        <div className="product-quantity">
                            <label htmlFor="quantity">Cantidad </label>
                            <span className="quantity">{item.quantity}</span>
                        </div>
                        <div className="product-line-price">
                            <label htmlFor="total">Total </label>
                            <span className="total">COP ${item.quantity*item.price}</span>
                        </div>
                    </div>
                    )
                )}

            </div>
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
                    
            </div>
            {showForm ? <Formulario createOrder={createOrder}/> : null}
        </section>

    )
}
export default Cart;