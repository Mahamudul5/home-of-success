import React from 'react';
import { Card } from 'react-bootstrap';
import './happyStudent.css'


const HappyStudent = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Happy students</h1>
            <div className='happy-students  mx-auto'>
                <div>
                    <Card style={{ width: '18rem' }} className='mx-auto mt-3 mb-3'>
                        <Card.Img className='mx-auto img-fluid' variant="top" src="../images/happy4.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>jhon smith</Card.Title>
                            <Card.Text className='text-center' >
                                i am proud to be student of yours.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem' }} className='mx-auto mt-3 mb-3'>
                        <Card.Img className='mx-auto img-fluid' variant="top" src="../images/happy1.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Anisha Nawar</Card.Title>
                            <Card.Text className='text-center'>
                                home of success is amazing. I got gpa 5.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }} className='mx-auto mt-3 mb-3'>
                        <Card.Img className='mx-auto img-fluid' variant="top" src="../images/happy2.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Adnan Arif</Card.Title>
                            <Card.Text className='text-center'>
                                wonderful pleace to learn.
                                I am very happy to our techer services.I got top in by batch.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }} className='mx-auto mt-3 mb-3'>
                        <Card.Img className='mx-auto img-fluid' variant="top" src="../images/happy3.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Maharjabin Mahi</Card.Title>
                            <Card.Text className='text-center'>
                                prosessional learning tecnique and guideline. I love home of success.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HappyStudent;