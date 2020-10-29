import React from 'react';
import './MainHeader.css'
import image from '../../../images/taib-islam-dipu.png';
import Typical from 'react-typical';
import { useSpring, animated } from 'react-spring'



const MainHeader = () => {

    const props = useSpring({ opacity: 1, from: { opacity: 0 } })


    return (

        <div className="container">
            <div className="d-flex" style={{ height: 700 }}>
                <div className="d-flex align-self-center">
                    <div className="row">
                        <div className="col-md-10">

                        <h4 className="text-secondary">HELLO, I'M</h4>
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
                            <a class="btn btn-secondary my-4  btn-lg" href="https://drive.google.com/uc?export=download&id=1l5W9CBDxtmvijn9zlnaX2mopY3PAWh2G" target="_blank">DOWNLOAD RESUME</a>
                    </div>
                        <div className="col-md-2" >
                            <img src={image} alt="" style={{ height: 300 }} className="rounded-circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainHeader;