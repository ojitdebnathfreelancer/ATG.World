import React from 'react';
import './Banner.css';
import { FaArrowLeft } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='banner position-relative'>
            <div className='btn-div d-lg-none d-flex justify-content-between px-4 pt-4'>
                <FaArrowLeft/>
                <button>Join Group</button>
            </div>
            <div className='overlay position-absolute'>
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Banner;