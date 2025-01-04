import { useState } from 'react';
import './Allproducts.css'
import { useEffect } from 'react';
import SingpleProduct from '../SingleProudct/SingpleProduct';
const Allproducts = ({handleSelectedProduct}) => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('./fackData.json')
        .then(res =>res.json())
        .then(data => setProducts(data)
        )
    },[])
    return (
        <div>
           <h1>All products.jsx</h1>
           {
            products.map((p)=> <SingpleProduct handleSelectedProduct={handleSelectedProduct} key={p.id} product={p}></SingpleProduct>)
           }
        </div>
    );
};

export default Allproducts;