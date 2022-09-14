import React, { useState, useEffect } from "react";
import { Container, Figure, Tab, Tabs } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";


export const Locations = () => {
    // const [shroom, setShroom] = useState([])
    // const { shroomId } = useParams()
    // useEffect(
    //     () => {
            
    //         getMushroomDetail(shroomId)
    //             .then((data) =>

    //                 setShroom(data)
    //             )
    //     },
    //     [shroomId]
    // )
   const location = {
    _id: 34343,
    branchName: "Larry & Debbie Beck Infant & Toddler Center",
    address: "foianweoin"
   }

    return (
        <>{
            <Container className="shroom_profile">
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
                                Staff Profile
                            </Tab>
                            <Tab eventKey="Tour" title="Tour">
                               Tour 
                            </Tab>
                            <Tab eventKey="Reviews" title="Reviews" >
                                Reviews
                            </Tab>
                        </Tabs>

                    </div>
                </section>
            </Container>
        } </>
    )
}