import React from 'react';
import { useForm } from "react-hook-form";

const NewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='p-3 container w-50 mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
        <h3>item name :</h3>
      <input className='p-3' {...register("name", { required: true, maxLength: 20 })} />
      <h3>description:</h3>
      <input  className='p-3'  {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <h3>price :</h3>
      <input  className='p-3'  type="number" {...register("price", { min: 18, max: 99 })} />
      <h3>quantity:</h3>
      <input  className='p-3'  type="number" {...register("quantity", { min: 18, max: 99 })} />
      <h3>photo url :</h3>
      <input  className='p-3'  {...register("img", { pattern: /^[A-Za-z]+$/i })} />
      <input type="submit" value='Add Item'/>
    </form>

    </div>
    );
};

export default NewItem;