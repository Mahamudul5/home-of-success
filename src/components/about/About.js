import React from 'react';
import img from '../images/myProfile.jpg'
import './about.css'

const About = () => {
    return (
        <div className='main-about container-fluid'>
            <div className='mx-auto'>
                <h1>Hi !!!</h1>
                <h2>I am <span>Mahamudul hasan</span></h2>
                <h5> Founder & Ceo Home Of Success.</h5>
                <p>I am a Teacher of Math and Ict. I want to start some new courses soon. Everyday i learn about some basic subject and try to help my students.I am very friendly to my students.</p>
                <button className='btn btn-primary mb-5 mx-auto'> Contact</button>
            </div>
            <div className=' mx-auto'>
                <img className='mx-auto img-fluid' src={img} alt="" />
            </div>

        </div>
    );
};

export default About;