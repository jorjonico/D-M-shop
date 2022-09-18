import { useState } from 'react';
import Button from 'react-bootstrap/Button';
const ItemCount = ({stock, initial, onAdd}) => {
    const [qty, setqty] = useState(initial); 

    const handleClick = () => {
        if(qty < stock){
            setqty(qty+1)
        }
    }

    const restaClick = () => {
        if(qty > initial){
            setqty(qty-1)
        }
    }

    ItemCount.number = qty

    return (
        <div className="container d-flex align-items-center">
            <Button variant="outline-dark" size="sm" className='m-2' onClick={handleClick}>+</Button> 
            <h3>{qty}</h3>
            <Button variant="outline-dark" size="sm" className='m-2' onClick={restaClick}>-</Button>
            <Button variant="dark" size="sm" className='m-2' onClick={()=> onAdd(qty)}>Cargar al carrito</Button>
        </div>
    );
}
export default ItemCount;