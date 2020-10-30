import React from 'react';

const Navbar = () => {

    const resumeOnlineReadable = 'https://drive.google.com/file/d/18R-HH0jpsAzKQrvCMnAV53lntssXbtsq/view?usp=sharing';

    return (

        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-dark py-4">
                <a class="navbar-brand text-white ml-3" href="/">HOME</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item active">
                            <a class="nav-link mr-4 text-white" href="/home/#my-work">PROJECTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white" href="/blogs">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white" target="_blank" href={resumeOnlineReadable}>RESUME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white" href="/about">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white" href="/contact">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </nav>



        </div>

    );
};

export default Navbar;