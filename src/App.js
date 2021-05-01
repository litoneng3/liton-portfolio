import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects/Projects';
import Blogs from './components/Blogs/Blogs/Blogs';
import Contact from './components/Contact/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe/AboutMe';

function App() {
  return (
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
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
