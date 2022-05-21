import './ProductInfo.css'
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
        <div className='container w-50 ms-auto product_parent'>
            <h1>Product details</h1>
            <div className='front'>
               <img src={product.img} alt="" />
            </div>
            <div className='back'>
            <h2>{product.name}</h2>
           
            <p>price  : {product.price}</p>
            <p>supplier : {product.supplier}</p>
            <p>description : {product.description}</p>
            </div>
            <button onClick={handleNevigate}>manage inventory</button>
        </div>
       
        {/* <div class="flip">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">LAKE</hi>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div> */}
        </>
    );
};

export default ProductInfo;