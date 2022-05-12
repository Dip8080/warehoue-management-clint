import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='parent_banner container'>
            <div className="child-left" style={{padding:"20px"}}>
                <h1>this is a tag line <br /><span style={{color:"red",paddingLeft:"8px",marginTop:"8px"}}>chatch phrase</span></h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio exercitationem a eos? Omnis consequatur ipsa hic cum corporis quae dolorum magni vitae, quaerat rerum perferendis expedita temporibus. Beatae, soluta atque. </p>
                <div>
                    <button>button one</button>
                    <button>botton two</button>
                    
                    </div>
            </div>
            <div className='child-right'>
                <img src="https://img.freepik.com/free-vector/cute-detective-bear-cartoon-character_138676-2911.jpg?t=st=1652198164~exp=1652198764~hmac=c34f0bea8c4a95628784a3288e34ddda1cc6b2843938b49eb53a363e3478ecbd&w=740" alt="" />
            </div>
        </div>
    );
};

export default Banner;