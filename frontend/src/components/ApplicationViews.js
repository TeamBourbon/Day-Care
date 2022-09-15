import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";
import { Locations } from "./locations/LocationView";
import { ServiceFinder } from "./ServiceFinder";
import { Reservations } from "./Reservations";
import { VirtualTour } from "./VirtualTour";
import { LiveFeed } from "./LiveFeed";
import { Register } from "./auth/Register";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
            <Route exact path="/location">
                <Locations />
            </Route>

            <Route exact path="/servicefinder">
                <ServiceFinder />
            </Route>
            <Route exact path="/reservations">
                <Reservations />
            </Route>
            <Route exact path="/virtualTour">
               <VirtualTour /> 
            </Route>
            <Route exact path="/liveFeed">
               <LiveFeed />
            </Route>
            <Route exact path="/register">
               <Register />
            </Route>
        </>
    )
}