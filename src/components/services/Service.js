import React from 'react';
import "./service.css"



const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>this is single service:{name}</h2>
        </div>
    );
};

export default Service;