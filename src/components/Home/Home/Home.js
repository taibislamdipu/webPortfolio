import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Portfolio/Projects';


import './Home.css'

const Home = () => {

    return (
        <div>

            <Header></Header>
            {/* <About></About> */}
            <Projects></Projects>
            {/* <Contact></Contact> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;