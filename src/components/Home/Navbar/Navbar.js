import React from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const resumeOnlineReadable = 'https://drive.google.com/file/d/1BIgceXEv8qtjM0U_kXcKpimwQsUuvP0w/view?usp=sharing';

    return (

        <div className="container">

            <nav class="navbar fixed-top navbar-expand-lg bg-dark py-4">
                <a class="navbar-brand font-weight-bold nav-link" href="/">
                    <FontAwesomeIcon icon={faHome} /><span className="ml-2">HOME</span>
                </a>

                <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item active">
                            <a class="nav-link mr-4 mynav" href="/home/#my-work">PROJECTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 " href="/blogs">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" target="_blank" href={resumeOnlineReadable}>RESUME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="/about">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="/contact">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </nav>



        </div>

    );
};

export default Navbar;