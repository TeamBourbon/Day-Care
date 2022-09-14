import React, { useRef } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
// import "./Auth.css"
import { loginUser } from "./AuthManager"


export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("auth_token", res.token)
          localStorage.setItem("userId", res.userId)
          history.push("/")
        }
        else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <Container>
      <main >
        <Row className="header">
          <Col>
            green thumb care services
          </Col>
          <Col>
            <img
              width="100px"
              src="https://capgemini-my.sharepoint.com/:i:/p/abhi_a_singh/ESGZNPlK5lFFvGKC66vDABYB6s796AwxLXs1pi8i-hNsJg" />
          </Col>
        </Row>

        <Row><dialog ref={invalidDialog}>
          <div>Username or password was not valid.</div>
          <button onClick={e => invalidDialog.current.close()}>Close</button>
        </dialog>
        </Row>
        <Row>
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control ref={username} type="username" id="username" placeholder="Username address" required autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control ref={password} type="password" id="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group>
                <button type="submit">Sign In</button>
              </Form.Group>
            </Form>
        </Row>
        <Row>

          <section>
            <Link to="/register">Not a member yet?</Link>
          </section>
        </Row>
      </main >
    </Container>
  )
}