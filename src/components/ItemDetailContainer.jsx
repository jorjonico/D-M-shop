import { React, useEffect, useState } from "react";
import productos from "../data/productos";
import ItemDetail from "./ItemDetail";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";

function getProduc() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productos);
        }, 1000);
    })
}
const ItemDetailContainer = () => {
    const [produc, setProduc] = useState({});
    const {id} = useParams();
    
    useEffect(() =>{
        getProduc().then( respuesta => {
            setProduc(respuesta.find(productos => productos.id === parseInt(id)))
        })
    }, [id]);
    console.log(produc)
    return (
        <div className="container">
        <div className="row justify-content-md-center"><ItemDetail {...produc} /></div>
        </div>
    );
}
export default ItemDetailContainer 