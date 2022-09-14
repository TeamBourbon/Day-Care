import React from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
export const ServiceFinder = () => {
    const history = useHistory()
    // const render = (status: Status) => {
    //     return <h1>{status}</h1>;
    // };

    return (
        <>
            {/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
                
            </Wrapper> */}
            <a href="/location"
            >
                <img
                alt="location"
                    class="maps_locator"

                    src="https://lh3.googleusercontent.com/84BbhlL2YA-dSM5NC77H1oPqKQ5Kshih5Kg6aaw6mcyXqavu2YkITiC0W-psMQrI8dwcatI0OIrRAFKWNyXv-0o9CpL3kDclPuRUzLs=w210"
                />
            </a>


        </>
    )
}