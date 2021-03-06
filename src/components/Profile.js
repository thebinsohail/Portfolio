import React from 'react'
import {DiCode} from "react-icons/di"
import {AnimatedOnScroll} from "react-animated-css-onscroll";
 function Profile() {
    return (
        <div className="bio">
            <AnimatedOnScroll animationIn="fadeInLeft">
             <h1>Hi, I'm Anas Bin Sohail</h1>
              <img src="images/anas.png" width="40%" alt="Anas Profile Photo"></img>
             <h5>Software Developer | Engineer</h5>
             <DiCode size="6rem" color="black" opacity="75%"/><br/>
             <a href="./cv/CVAnas.pdf" download="Anas CV"><button >Download CV</button></a>
             </AnimatedOnScroll>
        </div>
    )
}
export default Profile