import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="col-md-3 p-1">
            <div className="card bg-info text-center">
                <img style={{ height: '250px' }} src={service.img} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  officiis id, sit eos illum tenetur. Nam earum, praesentium modi atque possimus nisi nobis labore magni.</p>
                <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-danger mb-2">Hire Me</button></a>
            </div>
        </div>

    );
};

export default Service;