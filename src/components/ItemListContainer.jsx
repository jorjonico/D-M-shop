import { React, useEffect, useState } from "react";
import ItemList from "./ItemList";
import {Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import {getAllItems as getProductos} from "../data";
import { getItemColor as getProductosColor } from "../data";
import { getItemOferta as getProductosOferta }  from "../data";

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