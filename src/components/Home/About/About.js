import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {

    return (

        <div>
            <Navbar></Navbar>
            
            <div className="container">

                <section className="about-section first-section">
                    <div className="row ">
                        <div className="col-md-4">

                            <h1>About Me </h1>

                        </div>
                        <div className="col-md-6">
                            <p>Front-End Web Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</p>

                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">
                    <div className="row ">
                        <div className="col-md-4">
                            <h2>Skills</h2>
                        </div>
                        <div className="d-flex">
                            <div className="col">
                                <ul>
                                    <li className="mt-2">React</li>
                                    <li className="mt-2">Node.js</li>
                                    <li className="mt-2">Express.js</li>
                                    <li className="mt-2">MongoDB</li>
                                    <li className="mt-2">JavaScript</li>
                                    <li className="mt-2">ES6</li>
                                    <li className="mt-2">Git</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className="mt-2">SASS</li>
                                    <li className="mt-2">HTML 5</li>
                                    <li className="mt-2">CSS 3</li>
                                    <li className="mt-2">Chrome DevTools</li>
                                </ul>
                            </div>

                            <div className="row col-md-5">
                                <ul>
                                    <li className="mt-2">Bootstrap 4</li>
                                    <li className="mt-2">Material-UI</li>
                                    <li className="mt-2">React-Bootstrap</li>
                                    <li className="mt-2">UX/UI</li>
                                    <li className="mt-2">Design Thinking</li>
                                    <li className="mt-2">Unit Testing</li>

                                </ul>
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
                                <li className="mt-2">Agile Development</li>
                                <li className="mt-2">SEO</li>
                                <li className="mt-2">Google Analytics</li>
                                <li className="mt-2">Asana</li>
                                <li className="mt-2">Cyber Security</li>
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