import React from "react";
/* import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; */
/* import { Col, Container, Row } from 'react-bootstrap'; */
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
/*         <Col>
            <Card className="mb-3 mt-3 text-center" style={{ width: '50%' }}>
            <Card.Img variant="top" src={produc.imagen} />
                <Card.Body>
                <Card.Title className="tituloItem">{produc.nombre}</Card.Title>
                <Card.Text>Color: {produc.color} | Género: {produc.genero}</Card.Text>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Edad: {produc.edad}</ListGroup.Item>
                <ListGroup.Item>Stock: {produc.stock}</ListGroup.Item>
                </ListGroup>
                <h4>Precio: ${produc.precio}</h4>
                <ItemCount 
                stock={produc.stock} 
                initial={1} 
                onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </Col> */
        <div className="card mb-3" style={{ width: '800px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={produc.imagen} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title tituloItem">{produc.nombre}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <ItemCount 
                    stock={produc.stock} 
                    initial={1} 
                    onAdd={onAdd}/>
                </div>
                </div>
            </div>
            </div>
    )
}
export default ItemDetail