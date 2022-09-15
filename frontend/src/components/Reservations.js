import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Reservations = () => {
    const reservations = [
        {
            name: "Lyle",
            location_id: "1",
            type_id: "child",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "Sparky",
            location_id: "2",
            type_id: "pet",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "Bernadine",
            location_id: "3",
            type_id: "child",
            liveFeed: "popuplink",
            active: true,
            date: "6/6/22"
        },
        {
            name: "Lyle",
            location_id: "2",
            type_id: "child",
            liveFeed: "popuplink",
            active: false,
            date: "6/7/22"
        },
        {
            name: "Bernadine",
            location_id: "3",
            type_id: "child",
            liveFeed: "popuplink",
            active: false,
            date: "6/15/22"
        },
        {
            name: "Sparky",
            location_id: "4",
            type_id: "pet",
            liveFeed: "popuplink",
            active: false,
            date: "6/17/22"
        },
        {
            name: "Sparky",
            location_id: "6",
            type_id: "pet",
            liveFeed: "popuplink",
            active: false,
            date: "6/18/22"
        }

    ]

    return (
        <>
            <Container>
                <br></br>
                <Button variant="dark">
                    Schedule a Drop-Off
                </Button>
            </Container>
            <Container>
                <br></br>
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
                                                <td>{`Larry & Debbie Beck Infant & Toddler Center`}</td>
                                                <td>{res.type_id}</td>
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
                <br></br>
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
                                                <td>{`Larry & Debbie Beck Infant & Toddler Center`}</td>
                                                <td>{res.type_id}</td>
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