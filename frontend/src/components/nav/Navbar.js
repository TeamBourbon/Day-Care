import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"




export const Navigation = () => {
  // const history = useHistory()
  // const userId = parseInt(localStorage.getItem("userId"))
  return (
    <div className={"navBar"}>
      <Navbar sticky="top" bg="flat"  expand="sm" collapseOnSelect={"true"}>
        <Container>
        
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse>
          <Nav>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link to="/logout">logout</Nav.Link>
            {/* <Nav.Link href={`/library/${userId}`}>Library</Nav.Link>
            <Nav.Link to="/login">Login</Nav.Link>
                  <Nav.Link to="/register">Register</Nav.Link>
            {
              localStorage.getItem("auth_token") !== null ?
                <Nav.Link onClick={() => {
                  localStorage.removeItem("auth_token")
                  localStorage.removeItem("userId")
                  history.push({ pathname: "/" })
                }}>
                  Logout
                </Nav.Link>
                :
                <>
                  <Nav.Link to="/login">Login</Nav.Link>
                  <Nav.Link to="/register">Register</Nav.Link>
                </>
            } */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    // <>
    // nav
    // </>
  )
}