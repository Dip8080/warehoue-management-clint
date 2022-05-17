import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const {userId} =useParams();
    const [product , setProduct ] = useState({}) ;
    useEffect(()=>{
        const url = `http://localhost:5000/fruits/${userId}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setProduct(data))
    },[])
    
    return (
        <div>
            <h4>this  is product info page {userId}</h4>
            <p>name : {product.name}</p>
            <p>name : {product.price}</p>
            <p>name : {product.supplier}</p>
            <p>name : {product.description}</p>
        </div>
    );
};

export default ProductInfo;