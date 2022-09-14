import React from "react";
import { Button, Container, FormLabel, Row } from "react-bootstrap";

export const Reviews = () => {
    const reviews = [
        {
            id: 1,
            review: "this is a review about this location",
            rating: 4,
            location_id: 1,
            user: "user"
        },
        {
            id: 2,
            review: "this is a review about this location",
            rating: 3.5,
            location_id: 1,
            user: "user"
        },
        {
            id: 3,
            review: "this is a review about this location",
            rating: 4.5,
            location_id: 1,
            user: "user"
        },
        {
            id: 4,
            review: "this is a review about this location",
            rating: 3,
            location_id: 1,
            user: "user"
        },
        {
            id: 5,
            review: "this is a review about this location",
            rating: 4,
            location_id: 1,
            user_id: 1,
            date: "date"
        }
    ]
    const ratings = reviews.map(review => review?.rating)
    let reducer = (total, currentValue) => total + currentValue
    const sum = ratings.reduce(reducer, 0)
    const ratingAvg = parseInt(sum / ratings.length)
    return (
        <>
            <Container>
                <Row>
                    Rating Average: {ratingAvg}/5
                </Row>
                <Row>

                    {
                        reviews.map(
                            review => {
                                return <div>
                                    {review.review}{"    "}{review.rating}<br></br>
                                    By:{review.user}<br></br>
                                </div>
                            }
                        )
                    }
                </Row>
                <Row>
                    <FormLabel>Leave a Review</FormLabel>
                    <input
                    // onChange={(e) => {
                    //     "event"
                    // }}
                    type="text"
                    placeholder="Maximum 500 characters."
                    />

                </Row>
                <Row>
                    Rating Component
                </Row>
                <Button
                variant="dark">
                    Submit
                </Button>
                
            </Container>

        </>
    )
}