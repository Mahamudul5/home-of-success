import React from 'react';
import './DetailsDisplay.css'
import { Link, useParams } from 'react-router-dom';

const DetailsDisplay = () => {
    const { detailsId } = useParams();
    return (
        <div className='details'>
            <h2 className='text-center text-primary'>Course number:{detailsId}</h2>
            <div className='text-center'>
                <Link to="/buyNow">
                    <button className='btn btn-primary'>BUY NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default DetailsDisplay;