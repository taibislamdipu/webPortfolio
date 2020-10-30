import React from 'react';

import Particles from 'react-particles-js';
import Navbar from '../Home/Navbar/Navbar';

import './Particle.css'

const Particle = () => {


    return (

        <div className="particle-container">

            <Particles
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enabled: true,
                                value_area: 100,
                            }
                        },
                        color: {
                            value: '#000'
                        },
                        shape: {
                            type: 'circle'
                        }
                    }
                }}
            />
        </div>
    );
};

export default Particle;
