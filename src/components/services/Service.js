import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./service.css"



const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service'>
            <div>
                <Card style={{ width: '18rem' }} className='mb-5 mx-auto'>
                    <Card.Img className='img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'>{name}</Card.Title>
                        <Card.Text>
                            <h3 className='text-center'>price:{price}</h3>
                        </Card.Text>
                        <Button variant="primary d-block mx-auto">Explore</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;