import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductInfo = () => {
    const {userId} =useParams();
    const [product , setProduct ] = useState({}) ;
    const nevigate = useNavigate();
    useEffect(()=>{
        const url = `http://localhost:5000/fruits/${userId}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setProduct(data))
    },[])
    
    const handleNevigate = ()=>{
        nevigate('/manage')
    }
    
    return (
        <>
        <div>
            <h4>this  is product info page {userId}</h4>
            <p>name : {product.name}</p>
            <p>name : {product.price}</p>
            <p>name : {product.supplier}</p>
            <p>name : {product.description}</p>
        </div>
        <button onClick={handleNevigate}>manage inventory</button>
        </>
    );
};

export default ProductInfo;