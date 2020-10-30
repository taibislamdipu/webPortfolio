import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import { Parallax } from 'react-parallax';
import './Header.css'

const Header = () => {
    return (
        <Parallax className="header-bg" strength={500}>
            <MainHeader></MainHeader>
        </Parallax>
    );
};

export default Header;