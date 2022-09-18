import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
    const {cartList} = useContext(CartContext);

    return (
        <>
        <h3 className='p-5'>Este es el Carrito 🛒</h3>
        {
            cartList.map(item => <li>{item.nombre}</li>)
        }
        <Button variant="danger" size="sm" className='m-5 mt-0' as={Link} to={`/`}>Seguir comprando</Button>
        </>
    );
}
export default Cart;