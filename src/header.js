import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {SunIcon } from '@chakra-ui/icons'
import 'bootstrap/dist/css/bootstrap.min.css';

 function Header(){
  


    return(

        <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
      <Navbar.Brand href="#home" className='brand'>
            {/* {' '} */}
            <SunIcon className='brandicon'/>
            SURAJ SACHAN
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="/" className='navitem'><i class="fa-solid fa-house-chimney"></i>Home</Nav.Link>
            <Nav.Link href="/projects" className='navitem'><i class="fa-solid fa-tv"></i>Projects</Nav.Link>
            <Nav.Link href="/contact" className='navitem'><i class="fa-solid fa-phone"></i>Contact</Nav.Link>
            <Nav.Link href="/certification" className='navitem'><i class="fa-solid fa-award"></i>Certifications</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
 } 
 export default Header;