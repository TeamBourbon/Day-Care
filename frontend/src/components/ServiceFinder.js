import React from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const ServiceFinder = () => {
    const history = useHistory()
    return (
        <>

            cool map feature

            <Button href="/location">
                go to location
            </Button>




        </>
    )
}