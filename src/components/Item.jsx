import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function Item({producto}) {
    return(
        <Col>
            <Card className="mb-3 mt-3 text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                <Card.Title className="tituloItem">{producto.nombre}</Card.Title>
                <Card.Text>Color: {producto.color} | Género: {producto.genero}</Card.Text>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Edad: {producto.edad}</ListGroup.Item>
                <ListGroup.Item>Stock: {producto.stock}</ListGroup.Item>
                </ListGroup>
                <h4>Precio: ${producto.precio}</h4>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Item