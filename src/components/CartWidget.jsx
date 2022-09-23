import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart3 } from 'react-bootstrap-icons';
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';
const CartWidget = () => {
    const { cartList, calcItemCart } = useContext(CartContext);

    return (
        <Button variant="light" as={Link} to={`/cart`}>
        <Cart3 className='card-ico'/> <Badge bg="danger">{(cartList.length === 0) ? <></> : calcItemCart()}</Badge>
        <span className="visually-hidden">Carrito</span>
        </Button>
    );
}
export default CartWidget;