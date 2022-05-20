import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseServices from '../../Hooks/UseServices';
import './Services.css'

const Services = () => {
    const [fruits]= UseServices([]);
   
    return (
        
        <div className='container'>
            <h1 className='text-center'>Our items</h1>
            <div className='parent'>
            
            {
                fruits.slice(0,6).map(x=><SingleService key={x._id} obj={x}></SingleService>)
            }
            </div>
        </div>
    );
};

const SingleService = (props)=>{
    const {name , quantity , supplier , price , img ,description,_id} = props.obj;
    const nevigate = useNavigate();
    const nevigaHandle=id=>{
        nevigate(`/service/${id}`)
    }
    return (

        <div className="card" id='services'>
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <h5 className="card-title">Supplier : {supplier}</h5>
          <h5 className="card-title">Price : {price}/kg</h5>
          <h5 className="card-title">stock : {quantity} kg</h5>
          <p className="card-text">Description : {description}</p>
          <button onClick={()=>nevigaHandle(_id)}  className="btn btn-primary flex justify-certer">Manage Item</button>
        </div>
      </div>
    )
}

export default Services;