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

const particleOptions = {
position: "absolute",
zIndex: -1,
top: 10,
left: 15,
}


class App extends Component{



  render(){

    return (
      
      <div className="App">
          
           
          <ParticlesBg color="#c2d3ed" type="cobweb" bg={true} className="particles" 
          
          params={particleOptions}
          
          />
          <Navigation/>
          <Profile/>
          <About/>
          <Accomp/>
                
         
      </div>
    );
  }
}

export default App;
