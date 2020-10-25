import React from 'react';
import './About.css';

const About = () => {
    return (

        <div className="aboutStyle py-5">
            <h1 className="text-white text-center">ABOUT ME</h1>

            <div className="container d-flex" style={{ height: 400 }}>
                <div className="d-flex align-self-center">
                    <div className="col-md-6">
                        <h3 className="text-white">Howdy!</h3>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est, officia consequatur quae nesciunt quod, eius quis totam alias quia,
                            veritatis eaque fugit explicabo minus soluta odit exercitationem. Minus, iure?
                        </p>
                        <button className="btn btn-secondary">DOWNLOAD MY CV</button>
                    </div>
                    <div className="col-md-6">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est, officia consequatur quae nesciunt quod, eius quis totam alias quia,
                            veritatis eaque fugit explicabo minus soluta odit exercitationem. Minus, iure?
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;