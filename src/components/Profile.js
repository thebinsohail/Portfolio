import React from 'react'
import {DiCode} from "react-icons/di"
import {AnimatedOnScroll} from "react-animated-css-onscroll";
 function Profile() {
    return (
        <div className="bio">
            <AnimatedOnScroll animationIn="fadeInLeft">
             <h1>Hi, I'm Anas Bin Sohail</h1>
              <img src="images/anas.png" width="30%" alt="Anas Profile Photo"></img>
             <h5>Software Developer | Engineer</h5>
             <DiCode size="10rem" color="#0e2e45" opacity="75%"/>
             </AnimatedOnScroll>
        </div>
    )
}
export default Profile