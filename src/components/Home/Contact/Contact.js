import React from 'react';
import Navbar from '../Navbar/Navbar';
import image2 from '../../../images/matiashBW.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Contact.css'
import Footer from '../Footer/Footer';
import MyForm from './ContactForm';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#F9F9F8' }}>
            <Navbar></Navbar>

            <div className="container contact-container">
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <h2>Please send your text here</h2>
                        <div className="contact-form">
                            <MyForm></MyForm>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <h3>You also find me in -</h3>
                        <hr />

                        <div className="mt-4">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Jatrabari, Dhaka-1236, Bangladesh.</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> +8801675884882</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> mailtaibislam@gmail.com</p>

                            <a href="https://www.linkedin.com/in/taibislamdipu/" target="_blank" className="btn btn-primary mr-2">
                                <FontAwesomeIcon icon={faLinkedin} /><span className="ml-2">LinkedIn</span>
                            </a>
                            <a href="https://github.com/taibislamdipu" target="_blank" className="btn btn-dark mr-2">
                                <FontAwesomeIcon icon={faGithub} /><span className="ml-2">GitHub</span>
                            </a>
                            <a href="https://twitter.com/taibislamdipu" target="_blank" className="btn btn-outline-primary mr-2">
                                <FontAwesomeIcon icon={faTwitter} /><span className="ml-2">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contact;