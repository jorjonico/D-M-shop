import { useState } from 'react';
import Button from 'react-bootstrap/Button';
const ItemCount = ({stock, start, mensaje}) => {
    const [agregar, setAgregar] = useState(start); 

    const handleClick = () => {
        if(agregar < stock){
            setAgregar(agregar+1)
        }
    }

    const restaClick = () => {
        if(agregar > start){
            setAgregar(agregar-1)
        }
    }

    ItemCount.number = agregar

    return (
        <div className="container d-flex align-items-center">
            <Button variant="outline-dark" size="sm" className='m-2' onClick={handleClick}>+</Button> 
            <h3>{agregar}</h3>
            <Button variant="outline-dark" size="sm" className='m-2' onClick={restaClick}>-</Button>
            <Button variant="dark" size="sm" className='m-2' onClick={mensaje}>Agregar al carrito</Button>
        </div>
    );
}
export default ItemCount;