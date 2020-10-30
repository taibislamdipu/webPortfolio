import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import image2 from '../../../images/matiashBW.jpg';
import { Parallax } from 'react-parallax';
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <Parallax bgImage={image2} strength={500}>
            <Navbar></Navbar>
            <MainHeader></MainHeader>

        </Parallax>
    );
};

export default Header;