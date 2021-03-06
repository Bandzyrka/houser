import React from "react";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import {FaSearch, FaHome, FaCheck, FaCoins} from 'react-icons/fa'
import './nav-bar.styles.scss'
const NavBar = () => (
    
<Navbar bg="light" expand="lg" fixed="top" className='nav-bar'>
  <Container>
    <Link className='nav-bar-title' to="/">Houser</Link>
      <Nav className="ms-auto">
        <NavDropdown>
          <NavDropdown.Item as="li"><Link to="/"><FaHome /> Home </Link></NavDropdown.Item>
          <NavDropdown.Item as="li"><Link to="/search"><FaSearch /> Search</Link></NavDropdown.Item>
          <NavDropdown.Item as="li"><Link to="/search?purpose=for-sale"><FaCheck /> For Sale </Link></NavDropdown.Item>
          <NavDropdown.Item as="li"><Link to="/search?purpose=for-rent"><FaCoins /> For Rent </Link></NavDropdown.Item>          
        </NavDropdown>
      </Nav>
  </Container>
</Navbar>
)

export default NavBar