import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
    if(user){
        nevigate('/')
    }
    const nevigateLogin = () =>{
        nevigate('/login')
    }
    return (
        <div>
            <h1>register before login</h1>
            <form className='container w-50 mx-auto p-3' onSubmit={handlesubmit}>
                name:
                <input className=' my-4' type="name" name="name" id="" required/>
                <br />
                email:
                <input className=' my-4' type="email" name="email" id="" required/>
                <br />

                <input className=' my-4' type="password" name="password" id="" required/>
                <br/>
                <input type="submit" value="submit" />
                <p>already have an account ? <span onClick={nevigateLogin}>please login</span></p>
            </form>
        </div>
    );
};

export default Registration;