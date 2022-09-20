import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
    const {cartList, clear, removeItem} = useContext(CartContext);
    return (
        <>
        <h3 className='m-5 mt-4 mb-4'>Finalizar compra 🛒</h3>
        <Button variant="dark" size="sm" className='m-5 mt-0 mb-4' onClick={clear}>Borrar carrito</Button>
        <Button variant="danger" size="sm" className='m-5 mt-0 mb-4' as={Link} to={`/`}>Seguir comprando</Button>
        <Table striped bordered hover className='m-5 mt-0'>
            <thead>
                <tr>
                <th>Unidades</th>
                <th>Nombre</th>
                <th>Género</th>
                <th>Edad</th>
                <th>Color</th>
                <th>Precio</th>
                </tr>
            </thead>
            <tbody>{cartList.map(({id, imagen, nombre, edad, genero, stock, precio, color, qty}) =>
                <tr key={id}>
                <td>{qty}</td>
                <td>{nombre}</td>
                <td>{genero}</td>
                <td>{edad}</td>
                <td>{color}</td>
                <td>${precio}<Button variant="outline-dark" size="sm" className='m-1 mt-0' onClick={() =>removeItem(id)}>Borrar</Button></td>
                </tr>)}
            </tbody>
            </Table>
        </>
    );
}
export default Cart;

/*         <div className='p-2 bg-light border' >{
            cartList.map((item) => <li key={item.id}><strong>{item.qty} unidades </strong> de protector {item.nombre} | color: {item.color} | precio <strong>${item.precio}</strong> c/u <Button variant="outline-dark" size="sm" className='m-1 mt-0' onClick={() =>removeItem(item.id)}>Borrar</Button></li>)
        }</div> */