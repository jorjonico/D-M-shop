import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
    const {cartList, clear} = useContext(CartContext);

    return (
        <>
        <h3 className='p-5'>Finalizar compra 🛒</h3>
        {
            cartList.map(item => <li>{item.qty} - {item.nombre} | {item.color} | ${item.precio}</li>)
        }
        <Button variant="dark" size="sm" className='m-5 mt-0' onClick={clear}>Borrar carrito</Button>
        <Button variant="danger" size="sm" className='m-5 mt-0' as={Link} to={`/`}>Seguir comprando</Button>
        </>
    );
}
export default Cart;