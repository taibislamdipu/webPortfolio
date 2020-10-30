import React from 'react';

import panda from '../../../images/Panda-Commerce.png';
import hotGaget from '../../../images/Hot-Gadgets.png';
import khasfood from '../../../images/Khaasfood.png';
import cardDesign from '../../../images/card-design.png';
import eSchool from '../../../images/E-School-Resources.png';
import eBank from '../../../images/Pioneer-Bank.png';
import pinmatcher from '../../../images/Pin-Generator.png';
import covid19Tracker from '../../../images/covid-19-tracker.png';
import reactSocialBuddy from '../../../images/React-Social-Buddy-App.png';
import emaJohn from '../../../images/ema-john.png';
import burjAlArab from '../../../images/burj-al-arab.png';
import ultraNation from '../../../images/react-ultra-nation.png';
import Navbar from '../Navbar/Navbar';
import AllProject from './AllProject';
import Footer from '../Footer/Footer';



const AllProjects = () => {

    const fakeData = [

        {
            title: ' Khaasfood | Online Grocery shop in Bangladesh',
            shortDetails: 'Redesign the home page of Khaasfood.com website using Bootstrap4, HTML5, CSS3. Fully responsive design for any devices.',
            image: khasfood,
            repo: 'https://github.com/taibislamdipu/khaasfood',
            live: 'https://taibislamdipu.github.io/khaasfood/index.html',
            technology: 'Bootstrap, HTML, CSS'
        },
        {
            title: 'Ultra Nation',
            image: ultraNation,
            shortDetails: 'A responsive website which is contain 250+ countries details. After select a perticular country user can get know more details about the countries',
            repo: 'https://github.com/taibislamdipu/react-ultra-nation-v2',
            live: 'https://react-ultra-nation-v2.netlify.app/',
            technology: 'React, Material-UI, REST-API, HTML, CSS'
        },
        {
            title: 'Burj-Al-Arab',
            image: burjAlArab,
            shortDetails: 'A responsive hotel room booking website with limited access control.',
            repo: 'https://github.com/taibislamdipu/burj-al-arab-client-v2',
            live: 'https://burj-al-arab-d7913.web.app/',
            technology: 'React, Firebase, Google Auth, Material-UI, REST-API, HTML, CSS'
        },
        {
            title: 'Social Buddy',
            image: reactSocialBuddy,
            shortDetails: 'Responsive online blog website with static blog content. User information and blog content manage by multiple 3rd party API.',
            repo: 'https://github.com/taibislamdipu/react-social-buddy',
            live: 'https://react-social-buddy-app.netlify.app/',
            technology: 'React, Material-UI, REST-API, HTML, CSS'
        },
        {
            title: 'Covid-19 Tracker',
            shortDetails: 'Covid-19 Live Statistics Tracking website with a responsive design and user friendly interface. User can check any countries up to date corona update.',
            image: covid19Tracker,
            repo: 'https://github.com/taibislamdipu/covid19-traker',
            live: 'https://taibislamdipu.github.io/covid19-traker/',
            technology: 'REST API, Bootstrap, HTML, CSS'
        },
        {
            title: 'Ema-John',
            shortDetails: 'An E-commerce where user can add to cart, check order history, admin can manage inventory and more.',
            image: emaJohn,
            repo: 'https://github.com/taibislamdipu/ema-john-simple',
            live: 'https://pedantic-roentgen-12f04c.netlify.app/',
            technology: 'React, Firebase, REST API, Netlify, Heroku, Google Auth, Bootstrap, HTML, CSS'
        },

        {
            title: 'Panda Commerce',
            shortDetails: 'An E-commerce website landing page who sales different types of products. The site is fully responsive and user-friendly interface.',
            image: panda,
            repo: 'https://github.com/taibislamdipu/panda-commerce',
            live: 'https://taibislamdipu.github.io/panda-commerce/',
            technology: 'Bootstrap, HTML, CSS'

        },
        {
            title: 'Hot Gadgets',
            shortDetails: 'An E-commerce website landing page who sales different types of products. The site is fully responsive and user-friendly interface.',
            image: hotGaget,
            repo: 'https://github.com/taibislamdipu/hot-gadgets',
            live: 'https://taibislamdipu.github.io/hot-gadgets/index.html',
            technology: 'Bootstrap, HTML, CSS'
        },

        {
            title: 'E-commerce Website Product Card',
            shortDetails: 'Design the responsive e-commerce website product card with a user-friendly interface.',
            image: cardDesign,
            repo: 'https://github.com/taibislamdipu/react-pixelstrap',
            live: 'https://taibislamdipu.github.io/react-pixelstrap/index.html',
            technology: 'Bootstrap, HTML, CSS'
        },
        {
            title: 'E-School Website',
            image: eSchool,
            shortDetails: 'A responsive website design for a online school.',
            repo: 'https://github.com/taibislamdipu/e-school-resources',
            live: 'https://taibislamdipu.github.io/e-school-resources/index.html',
            technology: 'Bootstrap, HTML, CSS'
        },

        {
            title: 'E-Bank',
            image: eBank,
            shortDetails: 'A single page web application with the basic Login, Deposit, Withdraw, Balance Check functionality',
            repo: 'https://github.com/taibislamdipu/pioneer-bank',
            live: 'https://taibislamdipu.github.io/pioneer-bank/index.html',
            technology: 'JavaScript, Bootstrap, HTML, CSS'
        },

        {
            title: 'Pin Matcher',
            image: pinmatcher,
            shortDetails: 'Online pin matcher application. System will automatically generate 4 digit pin. If any user input the wrong input more than 3 times system will automatically closed the input submission.',
            repo: 'https://github.com/taibislamdipu/pin-matcher',
            live: 'https://taibislamdipu.github.io/pin-matcher/index.html',
            technology: 'JavaScript, Bootstrap, HTML, CSS'
        },

    ]

    return (
        <div className="container">
            {/* <Navbar></Navbar> */}
            <h1 className="text-center py-5 " style={{ fontWeight: 700 }}>ALL PROJECTS</h1>

            <div className="row">
                {
                    fakeData.map(allProject => <AllProject allProject={allProject}></AllProject>)
                }
            </div>
            <Footer></Footer>
    </div>
    );
};

export default AllProjects;
