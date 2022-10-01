import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut =() =>{
        signOut(auth);
    }
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Dream Travel Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='home'>Home</Nav.Link>
            <Nav.Link href="home#topplace">Top Place</Nav.Link>
            <Nav.Link href="home#package">Popular Place</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user && <>
              <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
              <Nav.Link as={Link} to="/addplace">Add Service</Nav.Link>
              </>
            }
            {user ? <button className='text-white bg-primary border-0' onClick={handleSignOut}>SignOut</button>:<Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;