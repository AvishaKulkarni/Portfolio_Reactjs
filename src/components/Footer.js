import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/logo/MyPortfolio-Logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2  from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { MailchimpForm } from './MailchimpForm'




export  const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-items-center">
                <MailchimpForm />
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a  href="https://www.linkedin.com/in/avisha-kulkarni-5a1b1584/">
                            <img src={navIcon1} alt="linkedIn_icon" />
                        </a>
                        <a href="https://www.facebook.com/avisha.kulkarni">
                            <img src={navIcon2} alt="fb_icon" />
                        </a>
                        <a href="https://www.instagram.com/avisha_kulkarni/">
                            <img src={navIcon3} alt="insta_icon" />
                        </a>
                        <p>CopyRight 2024, All Right Resevered.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}


