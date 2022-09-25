import { React, useEffect, useState } from "react";
import ItemList from "./ItemList";
import {Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import {getAllItems as getProductos} from "../data";
import { getItemColor as getProductosColor } from "../data";
import { getItemOferta as getProductosOferta }  from "../data";
import Spinner from 'react-bootstrap/Spinner';

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
            <Row className="g-4"><h5 className='mt-2 mb-2 text-center text-secondary'>Protectores Bucales Personalizados</h5>
                {(producto.length === 0) ? <div className='m-5 text-center'><Spinner animation="border" variant="danger" /></div> : <ItemList productos={producto} />}
            </Row>
        </Container>
        </>
        
    );
}
export default ItemListContainer 