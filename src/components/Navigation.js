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
              <NavLink href="#" style={{color: 'white'}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{color: 'white'}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{color: 'white'}}>My Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{color: 'white'}}>Accomplishments</NavLink>
            </NavItem>
            
            
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
