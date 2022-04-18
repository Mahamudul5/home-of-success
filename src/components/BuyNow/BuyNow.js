import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './buyNow.css'

const BuyNow = () => {
    return (
        <div className='buy-now'>
            <h2 className='text-center text-primary'>Please Submit This</h2>
            <Form className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Course number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Pyment Method" />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default BuyNow;