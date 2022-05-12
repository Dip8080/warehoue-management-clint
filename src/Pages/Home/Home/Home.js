import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <div className='py-2 container' >
                <h1 className='text-center pt-3'>Top brands</h1>
                <div className='brands_img'>
                <img src="https://www.thecoverguy.com/app/uploads/2021/09/cover.png" alt="" />
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;