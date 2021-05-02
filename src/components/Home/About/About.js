import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';


const About = () => {
    return (
        <div className="container mt-5">
            <section className="row d-flex justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="d-flex mt-5 justify-content-center">
                         <h2 style={{ color: '#1CC7C1' }}>About Me</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h1>Liton Hossain</h1>
                        <p>Hi!.. This is Md Liton Hossain, A dedicated front end Developer. I have come to this web development world with highly dedication.  I am a self-motivated and hardworking person. I love developing websites. This is my passion.
                        </p>
                        <p>I am Seeking for a versatile and adaptable position in web development sector that suits my skills.</p>
                        <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Hire Me</button></a>
                        <Link to="/about"><button className="btn btn-success ms-2">More About Me</button></Link>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default About;