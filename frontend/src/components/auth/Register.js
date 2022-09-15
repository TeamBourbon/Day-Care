import React from 'react'
import { useState } from 'react';
import { Button, Container, Form, Grid } from "react-bootstrap";

export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phoneNumber,
                password
            }),
        })

        const data = await response.json()

        console.log(data)
    }

  return (
    <>
    <Container >
        <h1>Welcome</h1>
        <Form onSubmit={registerUser}>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' onChange={(e) => setName(e.target.value)}></Form.Control>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' onChange={(e) => setEmail(e.target.value)}></Form.Control>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='number' onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type='password' onChange={(e) => setPassword2(e.target.value)}></Form.Control>
            <br></br>
            <Button type='submit' variant="dark" size="lg">Sign In</Button>
        </Form>
        <br></br>
        <h4>New user? <a href='/login'>Create an account</a></h4>
        </Container>
    </>
  )
}
