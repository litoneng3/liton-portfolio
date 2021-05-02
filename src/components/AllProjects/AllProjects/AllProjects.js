import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AllProjectDetail from '../AllProjectDetail/AllProjectDetail';
import hungry from '../../../image/hungry-monster.PNG';
import football from '../../../image/football.PNG';
import baby from '../../../image/baby-care.PNG';
import Footer from '../../Shared/Footer/Footer';
import fancy from '../../../image/fancy.PNG';
import backpack from '../../../image/backpack.PNG';
import cruise from '../../../image/cruise.PNG';

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
        },
        {
            name: 'Backpack E-commerce Website',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam. ',
            tools: 'html, css, responsive design fundamental, bootstrap',
            img: backpack,
            repo: "https://github.com/litoneng3/Backpack",
            live: "https://litoneng3.github.io/Backpack/"

        },
        {
            name: 'Cruise Queen',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            tools: 'html, css, bootstrap,  javascript',
            img: cruise,
            repo: "https://github.com/litoneng3/Cruise-Queen",
            live: "https://litoneng3.github.io/Cruise-Queen/"
        },
        {
            name: 'Fancy Slider',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            tools: 'html, css, javascript, es6, rest api',
            img: fancy,
            repo: "https://litoneng3.github.io/fansy-slider/",
            live: "https://github.com/litoneng3/fansy-slider"
        }
    ]


    return (
        <div>
            <Navbar></Navbar>
            <section className="services-container mt-5 pt-5">
                <div className="text-center">
                    <h2 style={{ color: '#1CC7C1' }}>Projects</h2>
                    <h5 className="text-info">The projects those I have recently done.</h5>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5">
                        {
                            projectData.map(project => <AllProjectDetail project={project} key={project.name}></AllProjectDetail>)
                        }
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Projects;