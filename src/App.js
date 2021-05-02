import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs/Blogs';
import Contact from './components/Contact/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe/AboutMe';
import AllProjects from './components/AllProjects/AllProjects/AllProjects';

function App() {
  return (
    <div className="app-header">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/allProjects">
            <AllProjects></AllProjects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
