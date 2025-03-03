import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo/MyPortfolio-Logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2  from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export default function NavBar() {
   const [activeLink, setActiveLink] = useState('home'); 
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
       const onScroll = () => {
           if(window.scrollY > 50) 
           {
            setScrolled(true);
           }
           else
           {
            setScrolled(false);
           }
       }
       window.addEventListener("scroll", onScroll);
       return () => window.removeEventListener("scroll", onScroll);
   },[])

    const onUpdateActiveLink = (value) => 
    {
         setActiveLink(value);   
    }

  return (
    <div>
        {/* className="bg-body-tertiary" */}
       <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
           <span className="navbar-toggle-icon"></span>
        <Navbar.Toggle/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a target='_blank' href="https://www.linkedin.com/in/avisha-kulkarni-5a1b1584/">
                        <img src={navIcon1} alt="LinkedIn-icon" />
                    </a>
                    <a target='_blank' href="https://www.facebook.com/avisha.kulkarni">
                        <img src={navIcon2} alt="fb-icon" />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/avisha_kulkarni/">
                        <img src={navIcon3} alt="insta-icon" />
                    </a>
                </div>
                <button className="btn" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
