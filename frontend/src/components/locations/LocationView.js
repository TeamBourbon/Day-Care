import React, { useState, useEffect } from "react";
import { Accordion, Button, Col, Container, Figure, Image, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Reviews } from "./Reviews";
// import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";


export const Locations = () => {

    const location = {
        _id: 34343,
        branchName: "Larry & Debbie Beck Infant & Toddler Center",
        address: "foianweoin"
    }
    const staff = [
        {
            id: 1,
            image: "http://cdn.onlinewebfonts.com/svg/img_53203.png",
            name: "Terry Jane",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            jobTitle: "headmaster"
        },
        {
            id: 2,
            image: "http://cdn.onlinewebfonts.com/svg/img_53203.png",
            name: "Tevin Rogers",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sit amet nisl purus in mollis nunc sed id. A diam maecenas sed enim ut. Aliquet eget sit amet tellus cras adipiscing. Volutpat sed cras ornare arcu dui vivamus arcu. Sed elementum tempus egestas sed sed risus pretium quam. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. At tempor commodo ullamcorper a lacus vestibulum. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Non diam phasellus vestibulum lorem sed. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Scelerisque purus semper eget duis. Sagittis vitae et leo duis ut diam quam nulla. Ipsum faucibus vitae aliquet nec ullamcorper. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.",
            jobTitle: "teacher"
        },
        {
            id: 3,
            image: "http://cdn.onlinewebfonts.com/svg/img_53203.png",
            name: "Lisa McMackey",
            aboutMe: "Placerat vestibulum lectus mauris ultrices eros. Lectus urna duis convallis convallis tellus id interdum. Ultricies mi eget mauris pharetra et ultrices neque ornare. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. A scelerisque purus semper eget duis at tellus. Dui ut ornare lectus sit amet est placerat in. Amet justo donec enim diam. Euismod elementum nisi quis eleifend. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Maecenas sed enim ut sem viverra aliquet eget. Massa eget egestas purus viverra accumsan in nisl nisi.",
            jobTitle: "teacher assistant"
        }
    ]

    return (
        <>{
            <Container margin="20px" className="shroom_profile">
                <section className="shroom_profile">
                    <h1>{location.branchName}</h1>
                    <div className="shroom_header">
                        <Figure>
                            <Figure.Image 
                            width={'700px'}
                            alt="171x180" src="https://www.modulargenius.com/wp-content/gallery/floor-plans-daycare/cache/daycare-modular-buildings-1.jpg-nggid03563-ngg0dyn-1800x1125x80-00f0w010c010r110f110r010t010.jpg" />
                        </Figure>
                    </div>
                    <div className="shroom_detail">

                        <Tabs defaultActiveKey="about"
                            // id={shroom.id} 
                            className="shroom_details">

                            <Tab eventKey="about" title="About">
                                <p>
                                    About: Placerat vestibulum lectus mauris ultrices eros. Lectus urna duis convallis convallis tellus id interdum. Ultricies mi eget mauris pharetra et ultrices neque ornare. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. A scelerisque purus semper eget duis at tellus. Dui ut ornare lectus sit amet est placerat in. Amet justo donec enim diam. Euismod elementum nisi quis eleifend. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Maecenas sed enim ut sem viverra aliquet eget. Massa eget egestas purus viverra accumsan in nisl nisi.
                                </p>
                                <p>
                                    Founded: 2021
                                </p>
                            </Tab>
                            <Tab eventKey="Staff" title="Staff">
                                <Accordion defaultActiveKey={1}>
                                    {
                                        staff.map(
                                            staffMember =>
                                                <Accordion.Item eventKey={staffMember.id}>
                                                    <Accordion.Header>{staffMember.name}{"       "}{staffMember.jobTitle}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Container>
                                                            <Col>
                                                                <Image
                                                                    width="100px"
                                                                    src={staffMember.image} />

                                                            </Col>

                                                            <Col>
                                                                About: {staffMember.aboutMe}

                                                            </Col>
                                                        </Container>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                        )
                                    }
                                </Accordion>
                            </Tab>
                            <Tab eventKey="Tour" title="Tour">
                                <Button href={`/virtualTour`}>
                                    sick vr tour
                                </Button>
                            </Tab>
                            <Tab eventKey="Reviews" title="Reviews" >
                                <Reviews />
                            </Tab>
                        </Tabs>

                    </div>
                </section>
            </Container>
        } </>
    )
}