import './Regintration.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);



    const nevigate = useNavigate();
    const handlesubmit = event=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(name,email,pass)
        createUserWithEmailAndPassword(email, pass)
    }
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        nevigate('/')
      
    }
    const nevigateLogin = () =>{
        nevigate('/login')
       
    }
    return (
        <div>
            <h1 className='text-center'>Register before login</h1>
            <form className='container w-100 mx-auto py-3 w-lg-50' onSubmit={handlesubmit}>
                name:<br/>
                <input className='my-2 input-sec w-100' type="name" name="name" id="" required/>
                <br />
                email:<br/>
                <input className=' my-2 input-sec w-100' type="email" name="email" id="" required/>
                <br />
                password:<br/>
                <input className=' my-2 input-sec w-100' type="password" name="password" id="" required/>
                <br/>
                <input type="submit" className='button_submit' value="submit" />
                <p>already have an account ? <span onClick={nevigateLogin} className='button_submit'>please login</span></p>
            </form>
        </div>
    );
};

export default Registration;