import './ProductInfo.css'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = () => {
    const { userId } = useParams();
    const [product, setProduct] = useState({});
    const nevigate = useNavigate();
    useEffect(() => {
        const url = `https://lit-anchorage-35941.herokuapp.com/fruits/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleNevigate = () => {
        nevigate('/manage')
    }
    // update product
    const handleUpdate = () => {

        const quantity = parseInt(product.quantity);
        const updatedQuantity = quantity - 1;
        const newQuantity = { updatedQuantity };
        const url = `https://lit-anchorage-35941.herokuapp.com/fruits/${userId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                toast('product deleivered')

            })
    }
    const handleRestock = () => {
        toast('successfully restocked')
    }

    return (
        <>
            <h1 className='container text-center p-3 my-2 rounded bg-info'>item id : {product._id}</h1>
            <div className='container d-flex justify-content-center product-grand-parent'>

                <div className='product_parent p-3'>
                    <h1>Product details :</h1>
                    <div className='front'>
                        <img src={product.img} alt="" />
                    </div>
                    <div className='back'>
                        <h2>{product.name}</h2>

                        <p>price  : {product.price}/kg</p>
                        <p>quantity: {product.quantity}kg</p>
                        <p>supplier : {product.supplier}</p>
                        <p>description : {product.description}</p>
                        <button onClick={handleUpdate} className='btn rounded-pill bg-success my-2'>Delivered</button>
                        <ToastContainer />
                    </div>

                </div>
                <div className='p-3 '>
                    <h1>restock the items</h1>
                    <input className='form-control' type="number" placeholder='enter number to restock' /><br />
                    <input onClick={handleRestock} className='btn border bg-danger' type="button" value="restock" />
                    <ToastContainer />

                </div>


            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn px-4 my-4 bg-info rounded ' onClick={handleNevigate}>manage inventory</button>
            </div>
        </>
    );
};

export default ProductInfo;