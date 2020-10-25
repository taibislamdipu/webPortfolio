import React from 'react';
import './Project.css';

const Project = ({ project }) => {
    console.log(project);
    const { image, name, details, repo, live, reactLogo, firebaseLogo, mongoDBLogo, herokuLogo, htmlLogo, cssLogo, bootstrapLogo, jsLogo, apiLogo, materialuiLogo } = project;

    return (

        <div className="col-md-4">
            <div class="card-deck py-3">
                <div class="card">
                    <img class="card-img-top" src={image} alt="Card image cap" style={{ height: 400 }} />
                    <div class="card-body d-flex">
                        {/* <h5 class="card-title">{name}</h5> */}
                        {/* <p>{details}</p> */}
                        <img src={reactLogo} alt="" style={{ height: 50 }} />
                        <img src={firebaseLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={mongoDBLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={herokuLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={htmlLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={cssLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={bootstrapLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={jsLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={apiLogo} className="ml-1" alt="" style={{ height: 50 }} />
                        <img src={materialuiLogo} className="ml-1" alt="" style={{ height: 50 }} />
                    </div>
                    <div class="card-footer d-flex">
                        <a href={live} target="_blank"><button className="btn btn-secondary mr-2">Live</button></a>
                        <a href={repo} target="_blank"><button className="btn btn-secondary mr-2">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;