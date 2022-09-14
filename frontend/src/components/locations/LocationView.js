import React, { useState, useEffect } from "react";
import { Accordion, Button, Container, Figure, Row, Tab, Tabs } from "react-bootstrap";
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
            image: "this is a picture",
            name: "name example 1",
            aboutMe: "this is their about me",
            jobTitle: "headmaster"
        },
        {
            id: 2,
            image: "this is a picture",
            name: "name example 2",
            aboutMe: "this is their about me",
            jobTitle: "teacher"
        },
        {
            id: 3,
            image: "this is a picture",
            name: "name example 3",
            aboutMe: "this is their about me",
            jobTitle: "teacher assistant"
        }
    ]

    return (
        <>{
            <Container margin="20px"className="shroom_profile">
                <section className="shroom_profile">
                    <h1>{location.branchName}</h1>
                    <div className="shroom_header">
                        <Figure>
                            <Figure.Image alt="171x180" src="https://www.modulargenius.com/wp-content/gallery/floor-plans-daycare/cache/daycare-modular-buildings-1.jpg-nggid03563-ngg0dyn-1800x1125x80-00f0w010c010r110f110r010t010.jpg" />
                        </Figure>
                    </div>
                    <div className="shroom_detail">

                        <Tabs defaultActiveKey="About"
                            // id={shroom.id} 
                            className="shroom_details">

                            <Tab eventKey="about" title="About">
                                About
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
                                                            {staffMember.image}
                                                            {staffMember.aboutMe}
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