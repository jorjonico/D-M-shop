import { useState } from 'react';
import Button from 'react-bootstrap/Button';
const ItemCount = ({stock, initial, onAdd}) => {
    const [agregar, setAgregar] = useState(initial); 

    const handleClick = () => {
        if(agregar < stock){
            setAgregar(agregar+1)
        }
    }

    const restaClick = () => {
        if(agregar > initial){
            setAgregar(agregar-1)
        }
    }

    ItemCount.number = agregar

    return (
        <div className="container d-flex align-items-center">
            <Button variant="outline-dark" size="sm" className='m-2' onClick={handleClick}>+</Button> 
            <h3>{agregar}</h3>
            <Button variant="outline-dark" size="sm" className='m-2' onClick={restaClick}>-</Button>
            <Button variant="dark" size="sm" className='m-2' onClick={onAdd}>Agregar al carrito</Button>
        </div>
    );
}
export default ItemCount;