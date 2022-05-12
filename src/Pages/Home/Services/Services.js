import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [fruits , setFruits] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fruits')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return (
        
        <div className='container'>
            <h1 className='text-center'>our products</h1>
            <div className='parent'>
            
            {
                fruits.map(x=><SingleService key={x._id} obj={x}></SingleService>)
            }
            </div>
        </div>
    );
};

const SingleService = (props)=>{
    const {name , quantity , supplier , price , img ,description} = props.obj;
    return (

        <div className="card" id='services'>
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <h5 className="card-title">Supplier : {supplier}</h5>
          <h5 className="card-title">Price : {price}/kg</h5>
          <h5 className="card-title">stock : {quantity} kg</h5>
          <p className="card-text">Description : {description}</p>
          <button  className="btn btn-primary flex justify-certer">Go somewhere</button>
        </div>
      </div>
    )
}

export default Services;