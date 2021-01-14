import React, {createContext, useState, useContext} from 'react'

const StoreContext = createContext()
const useCartContext = () => useContext(StoreContext)


export const StoreProvider = ({children}) =>{

    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        const inCartList = products.find((i) => i.id === item.id)

        if(inCartList){
            inCartList.quantity += quantity
            setProducts([...products])
        } else {
            setProducts([...products, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        products.splice(
            products.findIndex((i) => i.id === id), 1
        )
        setProducts([...products])
    }
    
    return(
        <StoreContext.Provider 
        value = {{ products, addItem, removeItem }}>
            {children}
        </StoreContext.Provider>
    )

}
export default useCartContext
