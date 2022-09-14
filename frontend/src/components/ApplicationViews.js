import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";


export const ApplicationViews = () => {
    return (
        <>       
            <Route exact path="/">
                <Home />
            </Route>       
            <Route exact path="/services">
                <Services />
            </Route>       
        </>
    )
}