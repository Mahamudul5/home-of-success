import React from 'react';
import './home.css'
import { Carousel } from 'react-bootstrap';
import photo from '../images/header1.png'
import photo2 from '../images/header2.png'
import photo3 from '../images/header3.png'
import Services from '../services/Services';
import HappyStudent from '../HappyStudent/HappyStudent';
// import Footer from '../Footer/Footer'; 

const Home = () => {
    return (
        <div>

            <Carousel fade className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>Join my Online Classes</h3>
                        <p className='text-danger'>This is the great opportunity Learn from Home.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Beautiful Learning Environment</h3>
                        <p className='text-danger'>Get Knowdge With Happiness And Fun</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Solve Your Problems With Confidence</h3>
                        <p className='text-danger'>I am Care About Your Weakness.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <HappyStudent></HappyStudent>



        </div>
    );
};

export default Home;