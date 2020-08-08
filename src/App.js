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

const particleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#37023b",
        blur: 5
      }
    }
  }
}


class App extends Component{



  render(){

    return (
      
      <div className="App">
          
           
          <Particles className="particles"
          
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
