import React from 'react';
import Service from '../Service/Service';
import web from '../../../image/web-design.jfif';
import wordpress from '../../../image/wordpress.png';
import seo from '../../../image/seo.webp'
import './Services.css';
import webDevelopment from '../../../image/web-development.jpeg';

const Services = () => {
    const serviceData = [
        {
            name: 'Search Engine Optimization',
            img: seo
        },
        {
            name: 'Web Design',
            img: web
        },
        {
            name: 'Wordpress Development',
            img: wordpress
        },
        {
            name: 'Website Development',
            img: webDevelopment
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                        serviceData.map(service => <Service service={service} key={service.name}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;