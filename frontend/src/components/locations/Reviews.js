import React from "react";
import { Button, Container, FormLabel, Row, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";


export const Reviews = () => {
    const reviews = [
        {
            id: 1,
            review: "this is a review about this location",
            rating: 4,
            location_id: 1,
            user: "Gary B."
        },
        {
            id: 2,
            review: "this is a review about this location",
            rating: 3.5,
            location_id: 1,
            user: "Lewis C."
        },
        {
            id: 3,
            review: "this is a review about this location",
            rating: 4.5,
            location_id: 1,
            user: "tina S."
        },
        {
            id: 4,
            review: "this is a review about this location",
            rating: 5,
            location_id: 1,
            user: "Betty C."
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
                    <Col
                        classname="review_rating">
                        <h3>
                            Customer Satisfaction: {ratingAvg}/5
                        </h3>

                        <ReactStars
                            size={50}
                            value={ratingAvg}
                            isHalf={true}
                            count={5}
                            edit={false}
                        />

                    </Col>
                </Row>
                <Row>

                    {
                        reviews.map(
                            review => {
                                return <div
                                    className="review">
                                    {review.review}<br></br>
                                    By:{review.user}<br></br>
                                    <ReactStars
                                        value={review.rating}
                                        isHalf={true}
                                        count={5}
                                        edit={false}
                                    />
                                </div>
                            }
                        )
                    }
                </Row>
                <Row>
                    <FormLabel>Leave a Review</FormLabel>
                    <input
                        className="review_input"
                        // onChange={(e) => {
                        //     "event"
                        // }}
                        type="text"
                        placeholder="Maximum 500 characters."
                    />

                </Row>
                <Row>
                    <ReactStars
                        value={0}
                        isHalf={true}
                        count={5}
                        edit={true}
                    />
                </Row>
                <Button
                    variant="dark">
                    Submit
                </Button>

            </Container>

        </>
    )
}