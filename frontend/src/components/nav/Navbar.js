import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"




export const Navigation = () => {
  // const history = useHistory()
  // const userId = parseInt(localStorage.getItem("userId"))
  return (
    <div className={"navBar"}>
      <Navbar sticky="top" bg="flat"  expand="sm" collapseOnSelect={"true"}>
        <Navbar.Brand>
        <img 
        alt="brand_image"
        src={`https://capgemini-my.sharepoint.com/:i:/r/personal/abhi_a_singh_capgemini_com/Documents/Microsoft%20Teams%20Chat%20Files/Background%20(1).png?csf=1&web=1&e=h9O8et"`} width="50px" height="45px" />
          green thumb care services
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/servicefinder">Services</Nav.Link>
            <Nav.Link href="/reservations">Reservations</Nav.Link>
            <Nav.Link href="/register">Sign In</Nav.Link>
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
        
      </Navbar>
    </div>
    // <>
    // nav
    // </>
  )
}