import React, { useEffect } from 'react';
import {AiTwotoneDelete} from 'react-icons/ai'
import UseServices from '../Hooks/UseServices';
import {useNavigate} from 'react-router-dom'

const ManageInventory = () => {
    const [items] = UseServices([]);
    const nevigate = useNavigate();
    const handleNevigate=()=>{
        nevigate('/additem')
    }
  
    return (
        <>
                <div className='container'>
            <h1 className='text-center my-3'>manage your inventory</h1>
            <table className='w-50 mx-auto p-3 border'>
            <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
            {
                items.map(x=><ManageTable key={x._id} obj={x}></ManageTable>)
            }
            </table>
            <div className='d-flex justify-content-center '>
            <button className='my-4 btn rounded bg-info' onClick={handleNevigate}>add items</button>
            </div>
        </div>
       
        </>
    );
};

const ManageTable = (props)=>{
    const handleDelete = ()=>{
        confirm('are you sure ?')
    }
    
    const {name , quantity, price , img} = props.obj;
    return(
        <tr className='border px-2' >
        <th scope="row border">{name}</th>
        <td>{price}</td>
        
        <td>{quantity}</td>
        <button className='btn' onClick={handleDelete}><td><AiTwotoneDelete></AiTwotoneDelete></td></button>
      </tr>
    )
}


export default ManageInventory;