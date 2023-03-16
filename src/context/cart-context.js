import React, { useState } from "react";
//Provider
//Consumer

// const CartContext = React.createContext()
const CartContext = React.createContext();

const CartProvider = (props) => {
    const [cartData, setCartData] = useState([])
    const addData = (data) => {
        setCartData([...cartData, data])
    }
    const removeData = (cartData, data) => {
        return cartData.filter((ele)=>{
            return ele.title!==data
        })
    }

    return (
        <CartContext.Provider value={{cartData, addData, removeData}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}