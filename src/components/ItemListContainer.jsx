import { React, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import productos from "../data/productos";
import ItemList from "./ItemList";
import {Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function getProductos() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productos);
        }, 2000);
    })
}
const ItemListContainer = ({greeting}) => {
    let onAdd = () =>{
        if (ItemCount.number !== 0) {
            alert(`Usted a cargado ${ItemCount.number} productos al carrito`)
        }
    }
    const [producto, setProducto] = useState([]);
    useEffect( () =>{
        getProductos().then( respuestaPromesa => {
            setProducto(respuestaPromesa)
        });
    }, []);

    return (
        <>
        <h4 className="p-5">{greeting}</h4>
        <ItemCount 
        stock={5} 
        initial={1} 
        onAdd={onAdd}/>
        <Container className="mt-5">
            <Row className="g-4">
                <ItemList productos={producto} />
            </Row>
        </Container>
        </>
        
    );
}
export default ItemListContainer 