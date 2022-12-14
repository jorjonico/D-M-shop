import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalToPay, settotalToPay] = useState([])

    const isInCart = id => cartList.some(product => product.id === id);

    const addItem = (product) =>{

        if(isInCart(product.id)){
            const newCartList = cartList.map(cartElement =>{
                if(cartElement.id === product.id){
                    const copyItem = {...cartElement};
                    copyItem.qty += product.qty;
                    return copyItem;
                }
                else
                    return cartElement;
            })
            setCartList(newCartList);
        }
        else{
            const newProduct = {...product};
            setCartList([...cartList, newProduct]);
        }
    }

    const removeItem = (itemId) =>{
        const newCartList = cartList.filter((item) => item.id !== itemId)
        setCartList(newCartList)
    }

    const clear = () => {
        setCartList([])
    }

    const calcItemCart = () =>{
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((prevQty, newQty) => prevQty + newQty),0);
    }

    useEffect(() =>{
        settotalToPay(cartList.reduce((acc, item) => acc + item.qty * item.precio, 0));
    },[cartList]);

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, calcItemCart, totalToPay}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;