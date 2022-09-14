import React from "react";
import { Button, Carousel, Container, Row } from "react-bootstrap";
import { Navigation } from "./nav/Navbar";

export const Home = () => {


    return <>
        <Container>
            <Carousel fade>
                <Carousel.Item>
                <img 
                src="../images/mobile.jpg"
                alt="inspiring image 1"/>
                <Carousel.Caption>
                    Inspiring Phrase 1
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img 
                src="../images/mobile.jpg"
                alt="inspiring image 2"/>
                <Carousel.Caption>
                    Inspiring Phrase 2
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img 
                src="../images/mobile.jpg"
                alt="inspiring image 3"/>
                <Carousel.Caption>
                    Inspiring Phrase 3
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        <Container>
            <Row>
                <p>nurture the future you crave</p>
            </Row>
            <Row>
                <Button variant="dark" size="sm" href="/servicefinder">
                    find services
                </Button>
            </Row>
        </Container>
    </>
}