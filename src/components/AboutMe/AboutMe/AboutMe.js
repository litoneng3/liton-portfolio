import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import about from '../../../image/liton.jpg';
import Skills from '../../Shared/Skills/Skills';
import Footer from '../../Shared/Footer/Footer';


const AboutMe = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className="container mt-5 mb-5">
                <section className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="d-flex mt-5 justify-content-center">
                            <img src={about} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 pt-5">
                        <div>
                            <h1>Liton Hossain</h1>
                            <p>Hi!.. This is Md Liton Hossain, A dedicated front end Developer. I have come to this web development world with highly dedication.  I am a self-motivated and hardworking person. I love developing websites. This is my passion.
                        </p>
                            <p>I am Seeking for a versatile and adaptable position in web development sector that suits my skills.</p>
                            <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Hire Me</button></a>
                        </div>
                    </div>
                </section>
            </div>
            <Skills></Skills>
            <Footer></Footer>
        </div>

    );
};

export default AboutMe;