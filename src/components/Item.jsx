import React from "react";

function Item({producto}) {
    return(
        <div>
        <h1>{producto.nombre}</h1>
        <p>{producto.color}</p>
        <h4>$ {producto.precio}</h4>
        </div>
    )
}
export default Item