import { React, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import { getItem as getProduc } from "../data";

const ItemDetailContainer = () => {
    const [produc, setProduc] = useState({});
    const {id} = useParams();
    
    useEffect(() =>{
        getProduc(id).then( respuesta => {
            setProduc(respuesta)
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