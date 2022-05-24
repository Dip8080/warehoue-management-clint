import React from 'react';
import './Banner.css'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Banner = () => {
    const uselessBtn = ()=>{
        toast('this is useless button. click as hard as u can')
    }
    return (
        <div className='parent_banner container'>
            <div className="child-left" style={{padding:"20px"}}>
                <h1>Experience some exotic fruit <br /><span style={{color:"green",marginTop:"8px"}}>full fresh </span></h1>
                <p> this is a meaningful line for this exotic fruit page 
                    may be when i have time i will write somethig meaningful
                    about this website </p>
                <div>
                    <button onClick={uselessBtn} className='btn-three glow-on-hover'>button one</button>
                    <ToastContainer />
                   
                    
                    </div>
            </div>
            <div className='child-right'>
                {/* <img src="https://img.freepik.com/free-vector/cute-detective-bear-cartoon-character_138676-2911.jpg?t=st=1652198164~exp=1652198764~hmac=c34f0bea8c4a95628784a3288e34ddda1cc6b2843938b49eb53a363e3478ecbd&w=740" alt="" /> */}
            </div>
        </div>
    );
};

export default Banner;