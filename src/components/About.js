import React from 'react'
import { AiFillHtml5} from "react-icons/ai";
import {FaCss3Alt,FaReact, FaNode,FaBootstrap,FaNpm} from "react-icons/fa";
import {DiJava,DiJsBadge,DiMongodb,DiJqueryLogo,DiGit,DiCode} from "react-icons/di"
import { Jumbotron, Button } from 'reactstrap';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Container, Row, Col,Card,CardBody} from 'reactstrap';

function About() {
    return (
       <div>
        <div className="about">
       
              
                 <AnimatedOnScroll animationIn="fadeInUp">
                <h3 style={{paddingTop:'50px'}}>Who Am I Actually?</h3>
                <img src="images/dev.jpg" alt="Photo"></img>
               
               
                    <Card  className="cards" style={{marginTop: '50px',marginLeft: '50px',marginRight: '50px',position:'center'}}>
                        <CardBody>
                <p style={{textAlign:'center'}}>Educated and motivated software engineering student and a quick
                 learner,quick to ramp up with any existing development platform, and perform
                design, coding, debugging, and testing application and system software.
                 Excellent interpersonal as well as communication skills and 
                 enjoys a high-pressure team environment.</p>
                 </CardBody>
                 </Card>
               
                
                </AnimatedOnScroll>
              
                
                 </div>

           
                
                 <div className="skills">
                 <AnimatedOnScroll animationIn="fadeInRight">
              <h2 style={{margin:'0',paddingBottom:'50px'}}>Skills and Technologies on which I work on</h2>
                  </AnimatedOnScroll>
    
              <AnimatedOnScroll animationIn="fadeInUp">
            <ul id="techs">
            <li><AiFillHtml5 size="5rem" /><h5>HTML</h5></li>
            <li><FaCss3Alt size="5rem" color="orange"/><h5>CSS</h5></li>
            <li><FaBootstrap size="5rem" color="purple"/><h5>Bootstrap</h5></li>
            <li><FaReact size="5rem" color="aqua"/><h5>React</h5></li>
            <li><FaNpm size="5rem" color="gray"/><h5>Npm</h5></li>
            <li><FaNode size="5rem" color="green"/><h5>Node js</h5></li><br/>
            <li><DiMongodb size="5rem" color="green"/><h5>MongoDB</h5></li>
            <li><DiJava size="5rem" color="black"/><h5>Java</h5></li>
            <li><DiJsBadge size="5rem" color="orange"/><h5>Javascript</h5></li>
            <li><DiJqueryLogo size="5rem"/><h5>Jquery</h5></li>
            <li><DiGit size="5rem" color="red"/><h5>Git</h5></li>
         
            </ul>
            </AnimatedOnScroll>
           
                      </div>
         </div>
         
    )
}
export default About