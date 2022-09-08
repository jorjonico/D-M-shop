import { React, useEffect, useState } from "react";
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
const ItemListContainer = () => {
    const [producto, setProducto] = useState([]);
    useEffect( () =>{
        getProductos().then( respuestaPromesa => {
            setProducto(respuestaPromesa)
        });
    }, []);

    return (
        <>
        <Container className="mt-5">
            <Row className="g-4">
                <ItemList productos={producto} />
            </Row>
        </Container>
        </>
        
    );
}
export default ItemListContainer 