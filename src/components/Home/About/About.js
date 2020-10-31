
import React from 'react';

import { faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { resumeDonwloadLink } from '../../../App';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {


    return (

        <div>
            <div className="container about-container">

                <a class="btn btn-primary mr-2" href={resumeDonwloadLink} target="_blank">
                    <FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="ml-2"> DOWNLOAD RESUME</span>
                </a>
                <a class="btn btn-success " href="/contact" target="_blank">
                    <FontAwesomeIcon icon={faPaperPlane} /><span className="ml-2"> CONTACT ME</span>
                </a>

                <section className="about-section first-section">

                    <div className="row ">
                        <div className="col-md-4 animate__animated animate__fadeInLeftBig animate__slower">
                            <h1>About Me </h1>
                        </div>
                        <div className="col-md-6 animate__animated animate__fadeInRightBig animate__slower">
                            <p>Front-End Web Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</p>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">
                    <div className="row ">
                        <div className="col-md-4 animate__animated animate__fadeInLeftBig animate__slower">
                            <h2>Skills</h2>
                        </div>
                        <div className="col-md-8 animate__animated animate__fadeInRightBig animate__slower">
                            {/* 1st row */}
                            <div className="row">
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-react-original colored display-4"></i>
                                    <h5 className="">React</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-nodejs-plain colored display-4"></i>
                                    <h5 className="">Node.js</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-express-original colored display-4"></i>
                                    <h5 className="">Express.js</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-mongodb-plain colored display-4"></i>
                                    <h5 className="">MongoDB</h5>
                                </div>
                            </div>

                            {/* 2nd row */}
                            <div className="row">
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-javascript-plain colored display-4"></i>
                                    <h5 className="">JavaScript</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-npm-original-wordmark colored display-4"></i>
                                    <h5 className="">NPM</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <h5 className="">Git</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-heroku-plain colored display-4"></i>
                                    <h5 className="">heroku</h5>
                                </div>

                            </div>

                            {/* 3rd row */}
                            <div className="row">
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-bootstrap-plain colored display-4"></i>
                                    <h5 className="">Bootstrap 4</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                    <h5 className="">HTML5</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                    <h5 className="">CSS3</h5>
                                </div>
                                <div className="col flex-column trans-card pb-3">
                                    <i className="devicon-sass-original colored display-4"></i>
                                    <h5 className="">Sass</h5>
                                </div>
                            </div>

                            {/* 4th row */}
                            <div className="row">

                            </div>


                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Other Skills</h2>
                        </div>

                        <div className="col-md-4">
                            <ul>
                                <li className="mt-2">Agile Methodology</li>
                                <li className="mt-2">UX/UI</li>
                                <li className="mt-2">Debugging</li>
                                <li className="mt-2">REST APIs</li>
                                <li className="mt-2">ES6</li>
                                <li className="mt-2">Google Analytics</li>
                                <li className="mt-2">Asana</li>
                                <li className="mt-2">Cyber Security</li>
                                <li className="mt-2">SEO</li>
                                <li className="mt-2">Magento 2</li>

                            </ul>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Work Experience</h2>
                        </div>

                        <div className="col-md">
                            <p className="float-right">JULY 2020 - CURRENT</p>
                            <h4>1. Web Application Development</h4>
                            <p className="text-secondary">Self Employed</p>

                            <ul>
                                <li className="mt-2">MERN Stack Web Application Development.</li>
                                <li className="mt-2">Different types of Database Management.</li>
                                <li className="mt-2">Front-end & Back-end technologies.</li>
                            </ul>

                            <br />

                            <p className="float-right">MAR 2019 - AUG 2020</p>
                            <h4>2. Search Engine Optimization</h4>
                            <p className="text-secondary">LeisFita.com | Dhaka</p>

                            <ul>
                                <li className="mt-2">Optimize Page for Search Engines.</li>
                                <li className="mt-2">Keyword Research and Increase Organic Traffic.</li>
                                <li className="mt-2">Create marketing strategy, planning and execution.</li>
                            </ul>
                            <h5>Achievements:</h5>
                            <ul>
                                <li className="mt-2">Increase 2x online sales during the time of 2020 covid-19 lockdown.</li>
                                <li className="mt-2">Ranked on #1 website results in Google by ‘pearl necklace’ keywords in Bangladesh.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <hr />

                <section className="about-section">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Education</h2>
                        </div>

                        <div className="col-md-8">
                            <ul>
                                <li className="mt-2">Bachelor's degree in Business Information Technology/ University of Greenwich</li>
                                <li className="mt-2">Higher Secondary School Certificate/ Ideal College, Dhaka, Bangladesh.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Language</h2>
                        </div>

                        <div className="col-md-4">
                            <ul>
                                <li className="mt-2">English</li>
                                <li className="mt-2">Bengali</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>


            <Footer></Footer>

        </div>

    );
};

export default About;