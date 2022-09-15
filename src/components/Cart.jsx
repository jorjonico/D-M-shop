import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Cart = () => {
    return (
        <>
        <h3 className='p-5'>Este es el Carrito 🛒</h3>
        <Button variant="danger" size="sm" className='m-5 mt-0' as={Link} to={`/`}>Volver a comprar</Button>
        </>
    );
}
export default Cart;