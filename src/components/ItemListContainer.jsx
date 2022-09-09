import { React, useEffect, useState } from "react";
import productos from "../data/productos";
import ItemList from "./ItemList";
import {Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";

function getProductos() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productos);
        }, 1000);
    })
}
function getProductosColor(idColor) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productos.filter(producto => producto.color === idColor))
        }, 1000);
    })
}

function getProductosOferta(idCategory) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productos.filter(producto => producto.categoryId === idCategory))
        }, 1000);
    })
}
const ItemListContainer = () => {
    const [producto, setProducto] = useState([]);
    const { idColor, idCategory } = useParams();
    useEffect(() =>{
        if(!idColor && !idCategory ){
            getProductos().then( respuestaPromesa => {
                setProducto(respuestaPromesa)
        });
        } else if (idColor){
            getProductosColor(idColor).then( respuestaPromesa => {
                setProducto(respuestaPromesa)
            });
        } else if (idCategory){
            getProductosOferta(idCategory).then( respuestaPromesa => {
                setProducto(respuestaPromesa)
            });
        }
    }, [idColor, idCategory]);

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