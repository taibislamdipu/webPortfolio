import React from 'react';
import './MainHeader.css'
import image from '../../../images/taib-islam-dipu.png';
import Typical from 'react-typical';

const MainHeader = () => {

    return (

        <div className="container">
            <div className="d-flex" style={{ height: 700 }}>
                <div className="d-flex align-self-center">
                    <div className="col-md-8">
                        <h4 className="text-secondary">HELLO, I'M</h4>
                        <h1>TAIB ISLAM DIPU</h1>
                        <p className="text-secondary">
                            {' '}
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'Web Application Developer',
                                    1000,
                                    'Expertise in JavaScript Application',
                                    1000,
                                    'Comfortable with MERN Applications',
                                    1000,
                                ]}
                            />
                        </p>
                        <button className="btn btn-secondary my-4">MY WORK</button>
                    </div>
                    <div className="col-md-4" >

                        <img src={image} alt="" style={{ height: 300 }} className="rounded-circle" />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainHeader;