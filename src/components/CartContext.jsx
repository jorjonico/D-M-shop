import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (product, qty) =>{
        setCartList([...cartList, product])
    }

    const removeItem = (itemId) =>{
        const newCartList = cartList.filter((item) => item.id !== itemId)
        setCartList(newCartList)
    }

    const clear = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;