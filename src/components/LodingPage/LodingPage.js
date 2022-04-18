import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LodingPage.css'

const LodingPage = () => {
    return (
        <div style={{ height: '250px' }} className='w-100 d-flex justify-content-center align-items-center loding-main mb-5'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default LodingPage;