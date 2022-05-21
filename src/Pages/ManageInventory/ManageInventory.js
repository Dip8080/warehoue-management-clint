import React, { useEffect } from 'react';
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
                <div>
            <h1>this is manage inventory page</h1>
            {
                items.map(x=><li key={x._id}>{x.name}</li>)
            }

        </div>
        <button onClick={handleNevigate}>add items</button>
        </>
    );
};


export default ManageInventory;