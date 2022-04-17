import React, { useEffect, useState } from 'react';
import Service from './Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }
        , [])
    return (
        <div className='background-services'>
            <h1 className='text-center text-primary'>services</h1>

            <div className='service-card'>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)}

            </div>
        </div>

    );
};

export default Services;