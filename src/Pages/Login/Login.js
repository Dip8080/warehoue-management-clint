import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    // location won't work if you don't import it from router-dom
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // email and password authentication
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    //   google authentication
    
    const provider = new GoogleAuthProvider()
    const nevigate = useNavigate();
    
    const handleGoogle = () =>{
        signInWithPopup(auth,provider)
       }

    // -----------------------------------

    const handlesubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password =passRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password)
    }
    //will redirect from where i came.
    if(user){
        nevigate(from, { replace: true });
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

      if(loading){
          return (
              <><p>loading...</p></>
          )
      }

    const nevigateRegister = event =>{
        nevigate('/register')
    }
    return (
        <>
        <h1 className='text-center'>what the fuck</h1>
                    <Form className='container w-50 mx-auto my-5' onClick={handlesubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} className='bg-success font-light' type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out"/>
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p >new here ? <span className='bg-danger' onClick={nevigateRegister}>please register</span></p>
</Form>

<button onClick={handleGoogle}>sign in with google</button>

</>

       
    );
};

export default Login;