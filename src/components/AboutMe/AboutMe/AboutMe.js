import React from 'react';
import about from '../../../image/liton-aoubt.jpg';
import Navbar from '../../Shared/Navbar/Navbar';

const AboutMe = () => {
    return (
        
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-6">
                    <h2>Liton Hossain</h2>
                    <h5>Hi!.. This is Md. Liton Hossain. I am doing a BSc in Computer Science and Engineering at Rajshahi University of Engineering and Technology. Professional Front-End Developer with strong knowledge about HTML5, CSS3, RESPONSIVE DESIGN FUNDAMENTAL, BOOTSTRAP4/BOOTSTRAP5, JAVASCRIPT, REACT, NODEJS, WORDPRESS, GIT and GITHUB. Self-motivated person and positive thinker.
                </h5>
                <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Hire Me</button></a>
                    
                </div>
                <div className="col-md-6">
                    <img src={about} alt="" />
                </div>
            </div>
        </div>

    );
};

export default AboutMe;