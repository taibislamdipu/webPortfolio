import React from 'react';
import './About.css';

const About = () => {
    return (

        <div className="aboutStyle py-5">
            {/* <h1 className="text-white text-center">ABOUT ME</h1> */}

            <div className="container d-flex" style={{ height: 400 }}>
                <div className="d-flex align-self-center">
                    <div className="col-md-2">
                        <h3 className="text-secondary">Expertise</h3>
                        <ul className="text-white">
                            <li>React.js</li>
                            <li>JavaScript </li>
                            <li>EH6</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SEO</li>
                            <li>Critical Thinking</li>
                        </ul>
                        <a href="https://tinyurl.com/y4cxsdxf" target="_blank"><button className="btn btn-secondary">MY RESUME</button></a>
                    </div>
                    <div className="col-md-2">
                        <h3 className="text-secondary">Comfortable</h3>
                        <ul className="text-white">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>Material-UI</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <h3 className="text-white">Howdy!</h3>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a quisquam quidem cum ut, fugit perspiciatis quia qui, nihil iste maiores iusto dolore officia amet magni minus eos excepturi cupiditate?
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;