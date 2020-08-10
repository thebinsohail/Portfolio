import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './components/nav.css';
import './components/bg/bgRoot.css';
import Particles from 'react-particles-js';
import './components/profile.css'
import Profile from './components/Profile'
import About from './components/About'
import './components/about.css'
import { DiCode } from "react-icons/di";
import Skills from "./components/Skills"
import Accomp from "./components/Accomp"
import ParticlesBg from 'particles-bg'
import Modal from 'react-bootstrap/Modal';
import ReactDOM from "react-dom";
import { Button, ModalDialog} from 'react-bootstrap';
import {useState} from 'react';

const particleOptions = {
position: "fixed",
zIndex: -1,
top: 10,
left: 15,
opacity:50
}

class App extends Component{



  render(){

    return (
     
      <div className="App">
         <Navigation/>
          <ParticlesBg color="#020626" type="cobweb" opacity="50%" bg={true} className="particles" 
          
          params={particleOptions}
          
          />
        
          
          <Profile/>
          <About/>
          <Accomp/>
          <Modal.Dialog id='dialog'>
        
  <Modal.Header style={{background:'#0e2e45',color:'white'}}>
    <Modal.Title>WebFolio Under Development</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <h6>My Web Folio will be updated soon and so as will be fully functional</h6>
    <br/> <p>-Anas Bin Sohail</p>
  </Modal.Body>

  <Modal.Footer style={{background: 'whitesmoke'}}>
   
    <p><a href="mailto:anassohail.as@gmail.com">Email me</a></p><br/>
    <p><a href="https://www.linkedin.com/in/anas-bin-sohail-502515187/">LinkedIn</a></p>
  </Modal.Footer>
</Modal.Dialog>
         
      </div>
    );
  }
}

export default App;
