import React from 'react';
import './DetailsDisplay.css'
import { useParams } from 'react-router-dom';

const DetailsDisplay = () => {
    const { detailsId } = useParams();
    return (
        <div className='details'>
            <h2 className='text-center text-primary'>Course number:{detailsId}</h2>
        </div>
    );
};

export default DetailsDisplay;