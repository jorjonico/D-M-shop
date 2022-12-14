import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import {Container, Row } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { serverTimestamp, doc, addDoc, collection, updateDoc, increment } from "firebase/firestore";
import firestoreDB from "../data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const {cartList, clear, removeItem, totalToPay} = useContext(CartContext);

    const createOrder = () =>{
        let itemsForDB = cartList.map((item) => ({
            id: item.id,
            title: item.nombre,
            price: item.precio,
            quantity: item.qty,
        }));
        let order = {
            buyer:{
                name:"Emiliano Martinez",
                email:"emiliano@martinez.com",
                phone:"156115555",
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: totalToPay,
        }
        addDoc((collection(firestoreDB, "orders")), order).then((resp) => {
            clear();
            toast.dark(`Pedido enviado N°: ${resp.id}`, {
                position: "top-center",
                autoClose: 60000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        });

        itemsForDB.map(async (item) => {
            const itemRef = doc(firestoreDB, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            });
        })
    }

    if(cartList.length === 0){
        return <>
                    <ToastContainer />
                    <div className='text-center'>
                        <h3 className='m-5 mt-4 mb-4 text-secondary'>Tu Carrito está vacío 🛒</h3>
                        <Button variant="info" size="sm" className='m-5 mt-0 mb-4 text-white' as={Link} to={`/`}>Seguir comprando</Button>
                    </div>
                </>
    }
    return (
        <>
        <ToastContainer />
        <div className='text-center'>
        <h3 className='m-5 mt-4 mb-4 text-secondary'>Tu Carrito🎀</h3>
        </div>
        <Table striped hover className='m-5 mt-0'>
            <thead>
                <tr>
                <th></th>
                <th>Unidades</th>
                <th>Nombre</th>
                <th>Género</th>
                <th>Color</th>
                <th>Precio</th>
                <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>{cartList.map(({id, imagen, nombre, edad, genero, stock, precio, color, qty}) =>
                <tr key={id}>
                <td><img src={imagen} className="img-fluid rounded-start imgCart" alt="..."></img></td>
                <td>{qty}</td>
                <td>{nombre}</td>
                <td>{genero}</td>
                <td>{color}</td>
                <td>${precio}</td>
                <td>${precio * qty}<Button variant="outline-dark" size="sm" className='m-1 mt-0' onClick={() =>removeItem(id)}>Borrar</Button></td>
                </tr>)}
            </tbody>
            <tbody>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total a Pagar<strong><h5>${totalToPay}</h5></strong></td>
                </tr>
            </tbody>
            </Table>
            <Container>
                <Row className="justify-content-md-center">
                <Stack direction="horizontal" gap={2}>
                <div className="bg-light ml-3"><Button variant="dark" size="sm" className='m-1' onClick={clear}>Borrar carrito</Button></div>
                <div className="bg-light ms-auto"><Button variant="secondary" size="sm" className='m-1' as={Link} to={`/`}>Seguir comprando</Button></div>
                <div className="vr" />
                <div className="bg-light">
                    <Button variant="outline-info" size="sm" className='m-1' onClick={createOrder}>Finalizar compra</Button>
                </div>
                </Stack>
                </Row>
            </Container>
        </>
    );
}
export default Cart;