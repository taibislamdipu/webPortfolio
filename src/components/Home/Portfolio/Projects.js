import React from 'react';
import Project from './Project';


import reactLogo from '../../../images/logo/react-logo.png';
import firebaseLogo from '../../../images/logo/firebase-logo.png';
import mongoDBLogo from '../../../images/logo/mongoDB-logo.png';
import herokuLogo from '../../../images/logo/heroku.png';
import bootstrapLogo from '../../../images/logo/bootstrap-logo.png';
import htmlLogo from '../../../images/logo/html5.png';
import cssLogo from '../../../images/logo/css3.png';
import jsLogo from '../../../images/logo/JavaScript-logo.png';
import apiLogo from '../../../images/logo/api.png';
import materialuiLogo from '../../../images/logo/material-ui.png';
import nodeLogo from '../../../images/logo/nodeJs-logo.png';




import creativeAgency from '../../../images/React-Creative-Agency-App-Web.png';


import travelGuru from '../../../images/React-Travel-Guru-2.png';
import travelGuruWeb from '../../../images/react-travel-guru-2-web.png';



import webportfolio from '../../../images/web-portfolio-assingment.png';
import panda from '../../../images/Panda-Commerce.png';
import hotGaget from '../../../images/Hot-Gadgets.png';
import khasfood from '../../../images/Khaasfood.png';
import cardDesign from '../../../images/card-design.png';
import eSchool from '../../../images/E-School-Resources.png';
import eBank from '../../../images/Pioneer-Bank.png';
import calculator from '../../../images/Basic-Calculator.png';
import shoppingCart from '../../../images/Shopping-Cart.png';
import pinmatcher from '../../../images/Pin-Generator.png';
import covid19Tracker from '../../../images/covid-19-tracker.png';
import reactUdemy from '../../../images/react-udemy-app.png';
import reactSocialBuddy from '../../../images/React-Social-Buddy-App.png';
import volunteerNetwork from '../../../images/React-Volunteer-Network-App.png';
import volunteerNetworkWeb from '../../../images/React-Volunteer-Network-App-web.png';

import ultraNation from '../../../images/react-ultra-nation.png';



const Projects = () => {

    const fakeData = [
        {
            title: 'Creative Agency',
            image: creativeAgency,
            shortDetails: 'Complete MERN stack website for Graphis Design company who sales different types of services.',
            keyFeatures1: 'Customer can place an order, cancel the order, manage his order history and post review about the services.',
            keyFeatures2: 'Admin can add new service, update the order status, add a new admin to the system and check who place the order from the Admin Dashboard.',
            keyFeatures3: 'Separate user interface and functionality access for both admin and customer from their dashboard.',
            technology: 'React.js, Node.js, Bootstrap, Firebase, MongoDB, Heroku, REST-API',
            repo: 'https://github.com/taibislamdipu/creative-agency-client',
            live: 'https://react-creative-agency.web.app/',
        },
        {
            title: 'Volunteer Network',
            image: volunteerNetworkWeb,
            shortDetails: 'Complete MERN stack website for volunteer organizations who manage different types of volunteer activities.',
            keyFeatures1: 'Any user can register for single/multiple events with specific dates.',
            keyFeatures2: 'User can cancel their registered events from their Dashboard.',
            keyFeatures3: 'Admin can see all registered events list and add a new event from his dashboard.',
            technology: 'React.js, Node.js, Bootstrap, Firebase, MongoDB, Heroku, REST-API.',
            repo: 'https://github.com/taibislamdipu/volunteer-network-client',
            live: 'https://volunteer-network-auth-b52c8.web.app/',

        },
        {
            title: 'Travel Guru',
            image: travelGuruWeb,
            shortDetails: 'A hotel booking website based on the place you want to visit. The system will recommend available hotels near your travel destination.',
            keyFeatures1: 'After select, any location system will show short details about each destination.',
            keyFeatures2: 'Used Google Map for showing available hotels for booking the travel destination.',
            keyFeatures3: 'Customer can register manually, By their G-mail or Facebook account for book any hotel.',
            technology: 'React.js, Bootstrap, Firebase, REST-API, Firebase auth.',
            repo: 'https://github.com/taibislamdipu/react-travel-guru-v2',
            live: 'https://react-travel-guru-v2.web.app/',

        },

    ]


    return (

        <div className="container">

            <h1 className="text-center py-5 " style={{ fontWeight: 700 }}>OWN PROJECTS</h1>

            <div className="row mb-5" id="my-work">
                {
                    fakeData.map(project => <Project project={project}></Project>)
                }
            </div>
            <div>
                <a href="/allProjects" className="btn btn-success w-100 font-weight-bold">VIEW ALL PROJECTS</a>
            </div>
        </div>
    );
};

export default Projects;