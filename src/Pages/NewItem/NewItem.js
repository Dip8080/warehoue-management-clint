import React from 'react';
import { useForm } from "react-hook-form";

const NewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://lit-anchorage-35941.herokuapp.com/fruits`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                alert('item addded')

            });
    };
    return (
        <div className='p-3 container w-50 mx-auto card-container border'>
            <h1 className='text-center'>add new item</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <h3>item name :</h3>
                <input className='p-3' {...register("name")} />
                <h3>description:</h3>
                <textarea className='p-3'  {...register("description")} />
                <h3>price :</h3>
                <input className='p-3' type="number" {...register("price")} />
                <h3>quantity:</h3>
                <input className='p-3' type="number" {...register("quantity")} />
                <h3>photo url :</h3>
                <input className='p-3'  {...register("img")} />
                <h3>supplier :</h3>
                <input className='p-3'  {...register("supplier")} />
                <input className='btn bg-info' type="submit" value='Add Item' />
            </form>

        </div>
    );
};

export default NewItem;