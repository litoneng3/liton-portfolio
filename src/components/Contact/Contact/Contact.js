import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import Footer from '../../Shared/Footer/Footer';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_lc4nose', e.target, 'user_vaCIjY0U0Avqz0KBhu21g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="container contact-container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6" >
                        <form action="" onSubmit={sendEmail} className="bg-secondary p-2 shadow-lg rounded">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                <input type="text" class="form-control" placeholder="Your Name" name="name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" placeholder="Your Email" name="email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" placeholder="Type Your Message" name="message" rows="3"></textarea>
                            </div>
                            <input className="btn btn-danger" type="submit" value="Send Message" />
                        </form>
                    </div>
                    <div className="col-md-6 mt-4 ps-5">
                        <h3>You can also fine me in-</h3>
                        <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary rounded me-3"><i class="fab fa-linkedin"></i> Linkedin</button></a>
                        <a href="https://github.com/litoneng3" target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary rounded me-3"><i class="fab fa-github"></i> GitHub</button></a>
                        <a href="https://www.facebook.com/litoncse17/" target="_blank" rel="noopener noreferrer"><button className="btn btn-info rounded me-3 mt-1"><i class="fab fa-facebook"></i> Facebook</button></a>

                        <h5 className="mt-4">Address:</h5>
                        <p>Room No: 525, Shahid President Ziaur Rahman Hall <br/>
                        Rajshahi University of Engineering and Technology <br/>
                        Kazla, Rajshahi <br/>
                        Phone: 01757865368, 01842499346 <br/>
                        Email Address: litoneng3@gmail.com
                        </p>
                    </div>
                </div>

            </div>
            <Footer></Footer>



        </div>
    );
};

export default Contact;