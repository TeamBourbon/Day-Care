import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
export const ServiceFinder = () => {
    const history = useHistory()
    // const render = (status: Status) => {
    //     return <h1>{status}</h1>;
    // };

    return (
        <>
        <Container class="search">

            <div class="container">

                <div class="row">

                    <div class="col-lg-12">

                        <p><h1>Join us from anywhere on the globe</h1></p>



                        <div class="form-group">

                            <label>Location:</label>

                            <input type="text" class="form-control" id="search_input" placeholder="Type the city..." />

                        </div>

                    </div>

                </div>

            </div>
        </Container>
            <Container>

            <a 
            class="map"
            href="/location"
            >
                 <iframe
                    class="map_google"
                    href="/location"
                    onClick={() => {
                        history.push("/location")
                    }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0267198591087!2d-81.03417638478588!3d34.01752508061534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a4d6bba69a97%3A0x4b1c4b8d98f6432d!2sCapgemini!5e0!3m2!1sen!2sus!4v1663202201429!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </a>
                </Container>
            <Container>
                <Button
                variant="dark"
            href="/location">
                Go to Select Service Center
            </Button>
                
            </Container>
            {/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
                
            </Wrapper> */}


        </>
    )
}