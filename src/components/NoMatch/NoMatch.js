import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import errorGif from '../../images/404-error.gif';

const NoMatch = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <img src={errorGif} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default NoMatch;