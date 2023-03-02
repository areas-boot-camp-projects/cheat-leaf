import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import MyProfile from '../pages/MyProfile';
import logo from '../media/cheatleaflogo.png';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
            <Navbar className="nav-color" expand="lg">
              <Container fluid >
                <Navbar.Brand as={Link} to={"/Home"}>
                  <img
                    src={logo}
                    width="70"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                    <NavDropdown title="Login" id="navbarScrollingDropdown">
                      <NavDropdown.Item as={Link} to={"/Login"}>Login</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/#"}>
                        Register
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/#"}>
                        Sign Out
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/MyProfile"}>
                      My Profile
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex ml-auto">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div>
                <Switch>
                <Route path="/Home">
                        <Home />
                </Route>
                <Route path="/About">
                        <About />
                </Route>
                <Route path="/Login">
                        <Login />
                </Route>
                <Route path="/MyProfile">
                        <MyProfile />
                </Route>
                </Switch>
            </div>
            </Router>
          );
        }
    }
