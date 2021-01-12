import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Project = ({ project }) => {

    const { image, title, keyFeatures1, keyFeatures2, keyFeatures3, shortDetails, repo, live, technology } = project;

    return (

        <div className="container">
            <div className="container d-flex my-5" data-aos="fade-up">
                <div className="row border border-secondary rounded p-5">
                    <div className="col-md-6 ">
                        <a className="hyper-link" data-placement="top" title="See Live" href={live} target="_blank"><h1>{title}</h1></a>
                        <p>{shortDetails}</p>
                        <ul>
                            <li className="mt-3">{keyFeatures1}</li>
                            <li className="mt-3">{keyFeatures2}</li>
                            <li className="mt-3">{keyFeatures3}</li>
                        </ul>
                        <div>
                            <p><span style={{ fontWeight: 'bold' }}>Build With: </span>{technology}</p>
                        </div>

                    </div>

                    {/* project image code */}
                    <div className="col-md-6 projectImg bg-dark rounded">
                        <a href={live} target="_blank"><img src={image} className="mt-5 img-fluid img-thumbnail rounded trans-card " alt="" /></a>

                        <div className="text-center my-5">
                            <a href={live} target="_blank" className="btn btn-primary mr-2 font-weight-bold">
                            <FontAwesomeIcon icon={faGlobe} /><span className="ml-2">Website</span>

                        </a>
                            <a href={repo} target="_blank" className="btn btn-light mr-2 font-weight-bold">
                            <FontAwesomeIcon icon={faGithub} /><span className="ml-2">GitHub</span>
                        </a>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    );
};

export default Project;