import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Reservations = () => {
    const reservations = [
        {
            name: "ex1",
            location_id: "1",
            type_id: "2",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "ex1",
            location_id: "2",
            type_id: "2",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "ex1",
            location_id: "3",
            type_id: "1",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "ex1",
            location_id: "4",
            type_id: "1",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "ex1",
            location_id: "6",
            type_id: "2",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "ex1",
            location_id: "1",
            type_id: "2",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "ex2",
            location_id: "2",
            type_id: "2",
            liveFeed: "popuplink",
            active: false,
            date: "6/7/22"
        },
        {
            name: "ex2",
            location_id: "3",
            type_id: "1",
            liveFeed: "popuplink",
            active: false,
            date: "6/15/22"
        },
        {
            name: "ex2",
            location_id: "4",
            type_id: "1",
            liveFeed: "popuplink",
            active: false,
            date: "6/77/22"
        },
        {
            name: "ex2",
            location_id: "6",
            type_id: "2",
            liveFeed: "popuplink",
            active: false,
            date: "6/87/22"
        }

    ]

    return (
        <>
            <Container>
                <Button variant="dark">
                    Schedule a Drop-Off
                </Button>
            </Container>
            <Container>
                <h2>
                    Today's Reservations
                </h2>
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

                            reservations !== 0
                                ?
                                reservations.filter(res =>
                                    res.active === true).map(
                                        res => {
                                            return <tr>
                                                <td>{res.name}</td>
                                                <td>{res.name}</td>
                                                <td>{res.name}</td>
                                                <td>
                                                    <Button  variant="dark" href="/liveFeed">
                                                        Check in
                                                    </Button>
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
                <h2>
                    Future Reservations
                </h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            reservations !== 0
                                ?
                                reservations.filter(res =>
                                    res.active === false).map(
                                        res => {
                                            return <tr>
                                                <td>{res.name}</td>
                                                <td>{res.name}</td>
                                                <td>{res.name}</td>
                                                <td>
                                                    {res.date}
                                                </td>
                                            </tr>
                                        }
                                    )
                                : "you have no active reservations"
                        }
                    </tbody>
                </Table>

            </Container>

        </>
    )
}