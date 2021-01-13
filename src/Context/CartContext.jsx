import React, {createContext, useState, useEffect} from 'react'
import {Products} from '../listProducts';

export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    
    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(Products);
            });
            promise.then(Products => {
                setAllProducts(Products);
                setLoading(false) 
            })
        }, 500);
    }, [])
    
    const stocks = 10
    const initial = 0
    const [stock, setSotck] = useState(stocks)
    const [count, setCount] = useState(initial)
    const [add, setAdd] = useState(false)
    const [toggleItem, setToggleItem] = useState(false)
    const [cart, setCart] = useState([])

    const increase = () => { 
        if(count < stocks){
            setCount(count + 1)
            setSotck(stock - 1)
        }
    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
            setSotck(stock + 1)
        }
    }

    useEffect(() => {
        setAdd(false)
    }, [toggleItem])
    
    const removeItem = (e) => {
        // eslint-disable-next-line array-callback-return
        const itemDeleted = cart.filter(function(value, i, array){
            if (value.id !== e.target.id){
                return array
            }
        })
        setCart(itemDeleted)
    }

    return(
        <CartContext.Provider value = {{
            allProducts: allProducts,
            loading : loading,
            setLoading: setLoading,
            toggleItem: toggleItem,
            setToggleItem: setToggleItem,
            initial: initial,
            stocks: stocks,
            stock: stock,
            setSotck: setSotck,
            increase: increase,
            decrease: decrease,
            add: add,
            setAdd: setAdd,
            cart: cart,
            setCart: setCart,
            removeItem: removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider
