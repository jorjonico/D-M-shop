import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'; 
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({id, imagen, nombre, descripcion, edad, genero, stock, precio, color}) {
    const [enCarrito, setEnCarrito] = useState(false);
    const {addItem} = useContext(CartContext);
    function onAdd(qty){
        toast.dark(`Cargando ${qty} ${nombre} a tu carrito 🛒`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setEnCarrito(true);
        addItem({id, imagen, nombre, descripcion, edad, genero, stock, precio, color, qty})
    };
    if(!imagen){
        return <div className='m-5 text-center'><Spinner animation="border" variant="danger" /></div>
    }
    return(
        <div className="card mb-3 mt-5" style={{ width: '800px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={imagen} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8 mb-3">
                <div className="card-body">
                    <h5 className="card-title tituloItem">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Edad: {edad} | Género: {genero}</ListGroup.Item>
                    <ListGroup.Item>Color: {color} | Stock: {stock}</ListGroup.Item>
                    <h5 className="mt-2">Precio: ${precio}</h5>
                    </ListGroup>
                </div>
                {enCarrito? 
                <div><Button variant="outline-info" size="sm" className='m-2' as={Link} to={`/cart`}>Ver Carrito</Button><Button variant="dark" size="sm" className='m-2' as={Link} to={`/`}>Seguir comprando</Button></div>
                :
                <ItemCount className="" 
                    stock={stock} 
                    initial={1} 
                    onAdd={onAdd}/>}
                </div>
                <ToastContainer />
            </div>
            </div>
    )
}
export default ItemDetail