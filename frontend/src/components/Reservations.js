import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Reservations = () => {
    const reservations = [
        {
            name: "ex",
            location_id: "1",
            type_id: "2",
            liveFeed: "popuplink",
            active: true
        },
        {
            name: "ex",
            location_id: "2",
            type_id: "2",
            liveFeed: "popuplink",
            active: true
        },
        {
            name: "ex",
            location_id: "3",
            type_id: "1",
            liveFeed: "popuplink",
            active: true
        },
        {
            name: "ex",
            location_id: "4",
            type_id: "1",
            liveFeed: "popuplink",
            active: true
        },
        {
            name: "ex",
            location_id: "6",
            type_id: "2",
            liveFeed: "popuplink",
            active: true
        },
        {
            name: "ex",
            location_id: "1",
            type_id: "2",
            liveFeed: "popuplink",
            active: true
        },
        {
            name: "ex",
            location_id: "2",
            type_id: "2",
            liveFeed: "popuplink",
            active: false
        },
        {
            name: "ex",
            location_id: "3",
            type_id: "1",
            liveFeed: "popuplink",
            active: false
        },
        {
            name: "ex",
            location_id: "4",
            type_id: "1",
            liveFeed: "popuplink",
            active: false
        },
        {
            name: "ex",
            location_id: "6",
            type_id: "2",
            liveFeed: "popuplink",
            active: false
        }

    ]

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Feed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            reservations && reservations.active === false
                                ?
                                 reservations.map(
                                    
                                        res => {
                                            
                                            return <tr>
                                                <td>{res.name}</td>
                                                <td>{res.name}</td>
                                                <td>{res.name}</td>
                                                <td>
                                                    <Link to="nowhere">
                                                        Check in
                                                    </Link>
                                                </td>

                                            </tr>
                                        }
                                    )
                                


                                : "you have no active reservations"
                        }
                    </tbody>
                </Table>

            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Feed</th>
                        </tr>
                    </thead>

                    {
                        reservations && reservations.active === false
                            ? <tbody>
                                {reservations.map(
                                    res => {
                                        return <tr>
                                            <td>{res.name}</td>
                                            <td>{res.name}</td>
                                            <td>{res.name}</td>
                                            <td>
                                                <Link to="nowhere">
                                                    Check in
                                                </Link>
                                            </td>

                                        </tr>
                                    }
                                )
                                }

                            </tbody>

                            : "you have no future reservations"
                    }
                </Table>

            </Container>
        </>
    )
}