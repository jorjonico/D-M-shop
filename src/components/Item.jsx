import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Item({producto}) {
    return(
        <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Color: {producto.color} | Género: {producto.genero}</Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Edad: {producto.edad}</ListGroup.Item>
        <ListGroup.Item>Stock: {producto.stock}</ListGroup.Item>
        </ListGroup>
        <h4>Precio: ${producto.precio}</h4>
        </Card.Body>
        </Card>
    )
}
export default Item