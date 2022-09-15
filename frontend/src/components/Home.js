import React from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Navigation } from "./nav/Navbar";
import "./Home.css"

export const Home = () => {


    return <>

        <Container fluid="md" className="home_container">
            <Row fluid>
                <Col >
                    <p className="catch_phrase">nurture the future you want.</p>
                    
                </Col>
                <Col >
                <Button variant="dark" size="lg" href="/servicefinder">
                        Find Services
                    </Button>
                    
                </Col>

                

            </Row>

            {/* <Row>
               <Col className="home_image" fluid >
                <Image
                    fluid
                    className="carousel_image"
                    src="https://cdn.cdnparenting.com/articles/2018/05/644737381-H.webp"
                    alt="inspiring image 1" />
               </Col>
            </Row> */}
        </Container>
        <Container>
        <Row >
                <Carousel classname="carousel" fade>
                    <Carousel.Item>
                        <Image
                        fluid
                            className="carousel_image"
                            src="https://cdn.cdnparenting.com/articles/2018/05/644737381-H.webp"
                            alt="inspiring image 1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        fluid
                            className="carousel_image"
                            src="http://www.ninjamommers.com/wp-content/uploads/2016/04/Happy-Children.jpg"
                            alt="inspiring image 2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        fluid
                            className="carousel_image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7BqUS8g-_X92XOi894Pwccn1u2PN3B1YRA&usqp=CAU"
                            alt="inspiring image 3" />

                    </Carousel.Item>
                </Carousel>
            </Row>
            </Container> 
            
    </>
}