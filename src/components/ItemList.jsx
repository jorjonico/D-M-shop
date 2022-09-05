import React from "react";
import Item from "./Item";


function ItemList ({productos}) {
    return(
        <>
        { productos.map ( thisItem =>{
                return(
                <Item producto={thisItem} key={thisItem.id} />
                )
            })
        }
        </>
    );
};

export default ItemList;