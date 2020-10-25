import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import facebook from '../../../images/logo/facebook.png';
import medium from '../../../images/logo/medium.png';
import linkedin from '../../../images/logo/linkedin.png';

const Contact = () => {
    return (

        <div className="aboutStyle text-center" id="contact">
            <div className="container" style={{ height: 400 }}>
                <div className="my-container">
                    <div className="icon ">
                        <h4 className="py-5"><FontAwesomeIcon icon={faEnvelope} /> <span>mailtaibislam@gmail.com</span></h4>
                    </div>
                    <div className="text-center">
                        <a href="https://www.linkedin.com/in/taibislamdipu" target="_blank"><img src={linkedin} className="mr-2 rounded-circle social-icon" alt="" style={{ height: 50 }} /></a>
                        <a href="https://taibislamdipu.medium.com/" target="_blank"><img src={medium} className="mr-2 rounded-circle social-icon" alt="" style={{ height: 50 }} /></a>
                        <a href="https://www.facebook.com/taibislamdipu/" target="_blank"><img src={facebook} className="mr-2 rounded-circle social-icon" alt="" style={{ height: 50 }} /></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;