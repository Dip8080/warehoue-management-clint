import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <div className='py-2 container my-3' >
              
            
            </div>
            <Services></Services>
            <h1 className='text-center pt-3'>Top brands</h1>
            <div className='brands_img container'>
                <img src="https://img.freepik.com/free-vector/flat-fruit-collection_23-2148938827.jpg?t=st=1653038436~exp=1653039036~hmac=e749bca294702f4d74ef2f196ad1973c97f0565d2727c5376b1ba60bfa5719cf&w=740" alt="" />
                </div>
        </div>
    );
};

export default Home;