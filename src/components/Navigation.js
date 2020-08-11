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
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

 
      <Navbar dark expand="md" style={{background: '#0e2e45'}}>

        <NavbarBrand href="#"><MdPermIdentity color="#fff" size="3rem"/>Anas Bin Sohail</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <Link to="/" style={{color: 'white'}}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" style={{color: 'white'}}>About</Link>
            </NavItem>
            
            <NavItem>
              <Link href="/" style={{color: 'white'}}>Contact</Link>
            </NavItem>
            
            
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
