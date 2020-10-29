import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () => {
    return (

        <footer className="container">

            <div class="d-flex  mb-3">
                <div class="mr-auto">
                    <p className="text-secondary"><FontAwesomeIcon icon={faCopyright} /> TAIB ISLAM DIPU {new Date().getFullYear()}</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/taibislamdipu/" target="_blank" className=" ml-4">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/taibislamdipu" target="_blank" className=" ml-4">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/taibislamdipu" target="_blank" className="ml-4">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;