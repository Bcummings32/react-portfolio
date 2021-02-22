// import { render } from '@testing-library/react';
import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';


const NavigationBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const NavbarToggle = () => setCollapsed(!collapsed);
    
     
    return (
        <div>
            <Navbar color="faded" blue>

                <NavbarToggler onClick={NavbarToggle} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink
                    activeClassName='active'
                    isActive={() => window.location.pathname==='/about'}
                    
         
                    to="/about">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    activeClassName='active'
                    isActive={() => window.location.pathname==='/portfolio'}
                    
                    to="/portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    activeClassName='active'
                    isActive={() => window.location.pathname==='/contact'}
                    to="/contact">Contact</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default NavigationBar;

