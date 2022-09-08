import { React, useEffect, useState } from "react";
import productos from "../data/productos";
import ItemDetail from "./ItemDetail";
/* import {Container, Row } from 'react-bootstrap'; */
import 'bootstrap/dist/css/bootstrap.css';

function getProduc() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productos);
        }, 2000);
    })
}
const ItemDetailContainer = () => {
    const [produc, setProduc] = useState([]);
    useEffect( () =>{
        getProduc().then( respuestaPromesa => {
            setProduc(respuestaPromesa[16])
        });
    }, []);

    return (
        <div className="container">
        <div className="row justify-content-md-center"><ItemDetail produc={produc} /></div>
        </div>
    );
}
export default ItemDetailContainer 