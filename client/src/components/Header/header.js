import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './header.css';

class Header extends React.Component {
  render() {
      return (
          <Navbar light className="naviguation" >
              <NavbarBrand >Bamazon</NavbarBrand>
          </Navbar>
      )
  }
}

export default Header;