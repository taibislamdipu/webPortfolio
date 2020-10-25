import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (

        <div className="py-3 text-center">
            <p className="text-secondary"><FontAwesomeIcon icon={faCopyright} /> TAIB ISLAM DIPU {new Date().getFullYear()}</p>
        </div>

    );
};

export default Footer;