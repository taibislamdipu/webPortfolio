import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand text-secondary" href="#">TAIB ISLAM</a>
                <button class="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item active">
                            <a class="nav-link font-weight-bold text-secondary" href="#my-work">PORTFOLIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold text-secondary" href="#contact">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;