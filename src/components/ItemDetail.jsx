import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'; 
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ItemCount from "./ItemCount";

function ItemDetail({produc}) {
    let onAdd = () =>{
        if (ItemCount.number !== 0) {
            alert(`Usted a cargado ${ItemCount.number} productos al carrito`)
        }
    }

    return(
        <div className="card mb-3 mt-5" style={{ width: '800px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={produc.imagen} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8 mb-3">
                <div className="card-body">
                    <h5 className="card-title tituloItem">{produc.nombre}</h5>
                    <p className="card-text">{produc.descripcion}</p>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Edad: {produc.edad} | Género: {produc.genero}</ListGroup.Item>
                    <ListGroup.Item>Color: {produc.color} | Stock: {produc.stock}</ListGroup.Item>
                    <h5 className="mt-2">Precio: ${produc.precio}</h5>
                    </ListGroup>
                </div>
                <ItemCount className="" 
                    stock={produc.stock} 
                    initial={1} 
                    onAdd={onAdd}/>
                </div>
            </div>
            </div>
    )
}
export default ItemDetail