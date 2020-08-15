import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { MdPermIdentity } from "react-icons/md";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-scroll'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

 
      <Navbar light expand="md" style={{background: '#f0f3f5'}}>

        <NavbarBrand href="#"><MdPermIdentity color="black" size="3rem"/>Anas Bin Sohail</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
        
            <NavItem>
                <Link activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    
                    >

               <a href="" style={{color: 'black',textDecoration: 'none'}}> Home</a>
              </Link> 
            </NavItem>


            <NavItem>
             <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    
                    >

               <a href=""style={{color: 'black',textDecoration: 'none'}}>About</a>
              </Link>
            </NavItem>




            <NavItem>
                <Link activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    
                    >

                <a href="" style={{color: 'black',textDecoration: 'none'}}>Skills</a>
              </Link>
            </NavItem>
            
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
