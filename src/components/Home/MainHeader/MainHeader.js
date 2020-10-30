import React from 'react';
import './MainHeader.css'
import image from '../../../images/taib-islam-dipu.png';
import Typical from 'react-typical';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { resumeDonwloadLink } from '../../../App';


const MainHeader = () => {

    return (

        <div className="container">
            <div className="d-flex" style={{ height: 700 }}>

                <div className="d-flex align-self-center">

                    <div className="row">

                        <div className="col-md-10 animate__animated animate__backInLeft animate__slower">
                        
                            <h4 className="text-secondary ">HELLO, I'M</h4>

                            <h1 style={{ fontWeight: 700 }}>TAIB ISLAM</h1>

                            <p className="text-secondary">
                                {' '}
                                <Typical
                                    loop={Infinity}
                                    wrapper='b'
                                    steps={[
                                        'Font-End Web Developer',
                                        1000,
                                        'Expert in developing',
                                        1000,
                                        'Single page application',
                                        1000,
                                        'Using...',
                                        1000,
                                        'React',
                                        1000,
                                        'Node.js',
                                        1000,
                                        'Express.js',
                                        1000,
                                        'MongoDB',
                                        1000,
                                        'And more...',
                                        1000,

                                    ]}
                                />
                            </p>

                            <a class="btn btn-secondary my-4 " href={resumeDonwloadLink} target="_blank">
                                <FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="ml-2"> DOWNLOAD RESUME</span>
                            </a>
                        </div>

                        <div className="col-md-2 animate__animated animate__backInRight animate__slower " >
                            <img src={image} alt="" style={{ height: 300 }} className="rounded-circle trans-card" />
                        </div>

                    </div>

                </div>

            </div>

        </div>


    );
};

export default MainHeader;