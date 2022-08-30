import React from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = ({greeting}) => {
    let onAdd = () =>{
        if (ItemCount.number !== 0) {
            alert(`Usted a cargado ${ItemCount.number} productos al carrito`)
        }
    }
    return (
        <>
        <h4 className="p-5">{greeting}</h4>
        <ItemCount 
        stock={5} 
        initial={1} 
        onAdd={onAdd}/>
        </>
    );
}
export default ItemListContainer 