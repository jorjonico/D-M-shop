import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Item({producto, id}) {
    return(
        <Col>
            <Card className="mb-3 mt-3 text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title className="tituloItem">{producto.nombre}</Card.Title>
                    <Card.Text>Color: {producto.color} | Género: {producto.genero}</Card.Text>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item><h4>Precio: ${producto.precio}</h4></ListGroup.Item>
                    <ListGroup.Item><Button variant="dark" size="sm" className='m-2' as={Link} to={`/item/${id}`}>Ver detalle</Button></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Item