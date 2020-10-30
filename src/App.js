import React from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Blogs from './components/Blog/Blogs';
import Footer from './components/Home/Footer/Footer';
import Contact from './components/Home/Contact/Contact';
import About from './components/Home/About/About';
import AllProjects from './components/Home/Portfolio/AllProjects';
import Navbar from './components/Home/Navbar/Navbar';

export const resumeDonwloadLink = 'https://drive.google.com/uc?export=download&id=18R-HH0jpsAzKQrvCMnAV53lntssXbtsq'

const App = () => {
  return (
    <Router>

      <Navbar></Navbar>

      <Switch>
 
        <Route exact path="/" >
          <Home></Home>
        </Route>
        
        <Route path="/home" >
          <Home></Home>
        </Route>

        <Route path="/blogs" >
          <Blogs></Blogs>
          <Footer></Footer>
        </Route>

        <Route path="/about" >
          <About></About>
        </Route>

        <Route path="/contact" >
          <Contact></Contact>
        </Route>

        <Route path="/allProjects" >
          <AllProjects></AllProjects>
        </Route>



        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>


  );
};
 
export default App;