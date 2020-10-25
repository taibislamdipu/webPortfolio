import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Projects from '../Portfolio/Projects';

import './Home.css'

const Home = () => {



    return (
        <div>
            <Header></Header>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;