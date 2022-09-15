import React from 'react'
import { useState } from 'react';
import { Button, Container, Form, Grid } from "react-bootstrap";

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        })

        const data = await response.json()

        if(data.user) {
            window.location.href = '/'
        } else {
            alert('Please check you username and password')
        }

        console.log(data)
    }

  return (
    <>
    <Container>
        <h1>Login</h1>
        <br></br>
        <Form onSubmit={loginUser}>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' onChange={(e) => setEmail(e.target.value)}></Form.Control>
            <br></br>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
            <br></br>
            <Button type='submit'  variant="dark" size="lg">Log In</Button>
            <br></br>
            <br></br>
            <a href='/register'>Go back</a>
        
            
        </Form>
        
        </Container>
    </>
  )
}
