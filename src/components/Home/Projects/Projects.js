import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import hungry from '../../../image/hungry-monster.PNG';
import football from '../../../image/football.PNG';
import baby from '../../../image/baby-care.PNG';
import { Link } from 'react-router-dom';


const Projects = () => {

    const projectData = [
        {
            name: 'Popular Football League',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam. ',
            tools: 'html, css, bootstrap, javascript, react, react-router, rest api',
            img: football,
            repo: "https://github.com/litoneng3/popular-football-league",
            live: "https://604a0b3cde3cefb1ab097589--happy-carson-b22f6a.netlify.app/"

        },
        {
            name: 'Baby Care',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            tools: 'html, css, bootstrap, material ui, javascript, react, react-router-dom, express, mongodb, nodejs.',
            img: baby,
            repo: "https://github.com/litoneng3/baby-care-client",
            live: "https://baby-care-6ec01.web.app/"
        },
        {
            name: 'Hungry Monster',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            tools: 'html, css, javascript, es6, rest api',
            img: hungry,
            repo: "https://github.com/litoneng3/hungry-monster",
            live: "https://litoneng3.github.io/hungry-monster/"
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 style={{ color: '#1CC7C1' }}>Projects</h2>
                <h5 className="text-info">The projects those I have recently done.</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                        projectData.map(project => <ProjectDetails project={project} key={project.name}></ProjectDetails>)
                    }
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/allProjects"><button className="btn btn-warning">Viwe All Projects</button></Link>
            </div>

        </section>
    );
};

export default Projects;