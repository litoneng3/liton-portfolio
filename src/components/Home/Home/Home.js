import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../../Shared/Skills/Skills';

const Home = () => {
    return (
        <div style={{zIndex:'-1'}}>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            
        </div>
    );
};

export default Home;