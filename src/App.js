import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './components/nav.css';
import './components/bg/bgRoot.css';
import Particles from 'react-particles-js';
import './components/profile.css'
import Profile from './components/Profile';
import About from './components/About';
import './components/about.css';
import { DiCode } from "react-icons/di";
import Skills from "./components/Skills";
import Accomp from "./components/Accomp";
import ParticlesBg from 'particles-bg';
import Modal from 'react-bootstrap/Modal';
import ReactDOM from "react-dom";
import { Button, ModalDialog} from 'react-bootstrap';
import {useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { render } from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import BackToTop from "react-back-to-top-button";
const particleOptions = {
position: "fixed",
zIndex: -1,
top: 10,
left: 15,
right:15
}

class App extends Component{
  render(){

    return (
     
      <div className="App">
      <ParticlesBg color="#020626" type="cobweb" opacity="50%" bg={true} className="particles" />
      <Navigation/>  
      <Profile/>
    
      <About/>       
      
      </div>
    );
  }
}

export default App;
