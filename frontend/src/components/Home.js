import React from "react";
import { Button, Carousel, Container, Row } from "react-bootstrap";
import { Navigation } from "./nav/Navbar";
import "./Home.css"

export const Home = () => {


    return <>
        <Container>
            <Row>
                <img
                    className="carousel_image"
                    src="https://cdn.cdnparenting.com/articles/2018/05/644737381-H.webp"
                    alt="inspiring image 1" />
            </Row>
            
            <Row className="catch_phrase">
                <p className="catch_phrase">nurture the future you crave</p>
            </Row>
            <Row>
                <Button variant="dark" size="sm" href="/servicefinder">
                    find services
                </Button>
            </Row>
        </Container>
        {/* <Row>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="carousel_image"
                            src="https://cdn.cdnparenting.com/articles/2018/05/644737381-H.webp"
                            alt="inspiring image 1" />
                        <Carousel.Caption>
                            Inspiring Phrase 1
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel_image"
                            src="http://www.ninjamommers.com/wp-content/uploads/2016/04/Happy-Children.jpg"
                            alt="inspiring image 2" />
                        <Carousel.Caption>
                            Inspiring Phrase 2
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel_image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7BqUS8g-_X92XOi894Pwccn1u2PN3B1YRA&usqp=CAU"
                            alt="inspiring image 3" />
                        <Carousel.Caption>
                            Inspiring Phrase 3
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Container>
                <Row>
                    <p>nurture the future you crave</p>
                </Row>
                <Row>
                    <Button variant="dark" size="sm" href="/servicefinder">
                        find services
                    </Button>
                </Row>
            </Container> */}
    </>
}