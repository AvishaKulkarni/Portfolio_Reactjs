import { useState, useEffect } from 'react';
import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import ArrowRightCircle from 'bootstrap-icons';
// import ArrowRightCircle from 'bootstrap-icons/icons/arrow-right-circle.svg';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { isVisible } from '@testing-library/user-event/dist/utils';


export default function Banner() {

    const [ loopNum, setLoopNum ] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ['Web Developer', 'Web Designer', 'UX/UI Designer' ];
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {

        let ticker = setInterval(() => {
           tick();
        },delta)

        return() => {clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting)
        {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText)
        {
           setIsDeleting(true);
           setDelta(period);

        } else if(isDeleting && updatedText == '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio </span>
                        <h1>{`Hi I'm webdecoded `} <span className='wrap'>{text}</span></h1>
                        <p>
                           A passionate Frontend Developer crafting seamless web experiences.
                           I turn ideas into interactive, responsive designs.
                           Skilled in React, Tailwind, and modern web technologies.
                           Let's build something amazing together! 🚀
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect <i className="bi bi-arrow-right-circle"></i> </button>
                        {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button> */}
                    </div>}
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"  />
                </Col>
            </Row>
        </Container>
    </section>

  )
}
