import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
    const {cartList, clear, removeItem} = useContext(CartContext);
    return (
        <>
        <h3 className='p-5'>Finalizar compra 🛒</h3>
        <div className='p-5' >{
            cartList.map(item => <li key={item.id}><strong>{item.qty} unidades</strong> de protector {item.nombre} | color: {item.color} | precio <strong>${item.precio}</strong> x/u - id{item.id}<Button variant="outline-dark" size="sm" className='m-1 mt-0' onClick={() =>removeItem(item.id)}>Borrar</Button></li>)
        }</div>
        <Button variant="dark" size="sm" className='m-5 mt-0' onClick={clear}>Borrar carrito</Button>
        <Button variant="danger" size="sm" className='m-5 mt-0' as={Link} to={`/`}>Seguir comprando</Button>
        </>
    );
}
export default Cart;