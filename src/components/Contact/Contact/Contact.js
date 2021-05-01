import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../../Shared/Navbar/Navbar';

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
            <div className="container col-md-6" >
                <form action="" onSubmit={sendEmail}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                        <input type="text" class="form-control" name="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name="email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" name="message" rows="3"></textarea>
                    </div>
                    <input type="submit" value="Send Message" />
                </form>
            </div>


        </div>
    );
};

export default Contact;