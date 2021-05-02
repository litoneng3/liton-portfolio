import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className="container mt-5 bg-info pb-5">
            <div className="text-center">
                <h5 style={{ color: '#000' }}>Skills</h5>
                <h2>Skills We Have</h2>
            </div>
            <div className="row">
                <div className='col-md-6 text-dark'>
                    <div className="mb-3">
                        <label htmlFor="">HTML</label>
                        <ProgressBar striped variant="success" now={80} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">CSS</label>
                        <ProgressBar striped variant="secondary" now={75} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">BOOTSTRAP</label>
                        <ProgressBar striped variant="warning" now={90} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">JAVASCRIPT</label>
                        <ProgressBar striped variant="primary" now={85} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">REACT</label>
                        <ProgressBar striped variant="danger" now={70} />
                    </div>
                </div>

                <div className='col-md-6 ps-3 mt-5 text-dark'>
                    <p><span>Expertise: </span>html5, css3, responsive design, bootstrap4, javascript, react, react router, rest api</p>
                    <p><span>Comfortable: </span>wordpress, mongodb, nodejs, express, material UI</p>
                    <p><span>Familiar: </span>firebase, graphQL, MySQL, PHP, SEO</p>
                    <h5>Other Skills: ms word, ms excel, ms power point, Camtasia Studio</h5>
                    <h5>Languages: English, Bangla</h5>
                </div>
            </div>


        </div>
    );
};

export default Skills;