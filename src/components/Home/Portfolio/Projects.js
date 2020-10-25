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


import travelGuru from '../../../images/React-Travel-Guru-2.png';
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
import ultraNation from '../../../images/react-ultra-nation.png';



const Projects = () => {

    const fakeData = [
        {
            name: 'Creative Agency',
            details: 'React app for a creative service provider.',
            image: 'https://i.imgur.com/8yLm0yG.png',
            repo: 'https://github.com/taibislamdipu/creative-agency-client',
            live: 'https://react-creative-agency.web.app/',
            reactLogo: reactLogo,
            firebaseLogo: firebaseLogo,
            mongoDBLogo: mongoDBLogo,
            herokuLogo: herokuLogo,
        },
        {
            name: 'Travel Guru',
            image: travelGuru,
            repo: 'https://github.com/taibislamdipu/react-travel-guru-v2',
            live: 'https://react-travel-guru-v2.web.app/',
            reactLogo: reactLogo,
            firebaseLogo: firebaseLogo,
            mongoDBLogo: mongoDBLogo,
        },
        {
            name: 'demo projects3',
            image: volunteerNetwork,
            repo: 'https://github.com/taibislamdipu/volunteer-network-client',
            live: 'https://volunteer-network-auth-b52c8.web.app/',
            reactLogo: reactLogo,
            firebaseLogo: firebaseLogo,
            mongoDBLogo: mongoDBLogo,
            herokuLogo: herokuLogo,
        },
        {
            name: 'demo projects3',
            image: reactUdemy,
            repo: 'https://github.com/taibislamdipu/react-udemy-app',
            live: 'https://react-udemy-app.netlify.app/',
            reactLogo: reactLogo,
            apiLogo: apiLogo,
        },
        {
            name: 'demo projects3',
            image: reactSocialBuddy,
            repo: 'https://github.com/taibislamdipu/react-social-buddy',
            live: 'https://react-social-buddy-app.netlify.app/',
            reactLogo: reactLogo,
            materialuiLogo: materialuiLogo,
            apiLogo: apiLogo,
        },
        {
            name: 'demo projects3',
            image: ultraNation,
            repo: 'https://github.com/taibislamdipu/react-ultra-nation-v2',
            live: 'https://react-ultra-nation-v2.netlify.app/',
            reactLogo: reactLogo,
            materialuiLogo: materialuiLogo,
            apiLogo: apiLogo,
        },
        {
            name: 'webportfolio',
            image: webportfolio,
            repo: 'https://github.com/taibislamdipu/web-portfolio',
            live: 'https://taibislamdipu.github.io/web-portfolio/',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: panda,
            repo: 'https://github.com/taibislamdipu/panda-commerce',
            live: 'https://taibislamdipu.github.io/panda-commerce/',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: hotGaget,
            repo: 'https://github.com/taibislamdipu/hot-gadgets',
            live: 'https://taibislamdipu.github.io/hot-gadgets/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: khasfood,
            repo: 'https://github.com/taibislamdipu/khaasfood',
            live: 'https://taibislamdipu.github.io/khaasfood/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: cardDesign,
            repo: 'https://github.com/taibislamdipu/react-pixelstrap',
            live: 'https://taibislamdipu.github.io/react-pixelstrap/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: eSchool,
            repo: 'https://github.com/taibislamdipu/e-school-resources',
            live: 'https://taibislamdipu.github.io/e-school-resources/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: eBank,
            repo: 'https://github.com/taibislamdipu/pioneer-bank',
            live: 'https://taibislamdipu.github.io/pioneer-bank/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
            bootstrapLogo: bootstrapLogo,
        },
        {
            name: 'demo projects3',
            image: calculator,
            repo: 'https://github.com/taibislamdipu/calculator',
            live: 'https://taibislamdipu.github.io/calculator/index.html',
            jsLogo: jsLogo,
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
        },
        {
            name: 'demo projects3',
            image: shoppingCart,
            repo: 'https://github.com/taibislamdipu/shopping-cart',
            live: 'https://taibislamdipu.github.io/shopping-cart/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
        },
        {
            name: 'demo projects3',
            image: pinmatcher,
            repo: 'https://github.com/taibislamdipu/pin-matcher',
            live: 'https://taibislamdipu.github.io/pin-matcher/index.html',
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
        },
        {
            name: 'demo projects3',
            image: covid19Tracker,
            repo: 'https://github.com/taibislamdipu/covid19-traker',
            live: 'https://taibislamdipu.github.io/covid19-traker/',
            apiLogo: apiLogo,
            htmlLogo: htmlLogo,
            cssLogo: cssLogo,
        },


    ]
    return (

        <div className="container">

            <h1 className="text-center py-5 text-white">MY PROJECTS : {fakeData.length}</h1>

            <div className="row" id="my-work">
                {
                    fakeData.map(project => <Project project={project}></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;