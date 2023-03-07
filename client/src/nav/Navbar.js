import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from '../media/cllogo2.png';


export default class Navigation extends Component {
    render() {
        return (
            <Navbar className="nav-color" expand="lg">
              <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>
                  <img
                    src={logo}
                    width="95"
                    height="40"
                    className="d-inline-block align-top m-2"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-center' id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                  >
                    <Nav.Link as={Link} to={"/"} style={{color: '#F8F8F8'}}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/About"} style={{color: '#F8F8F8', fontSize: '100%'}}>About</Nav.Link>
                  </Nav>
                 
                  <NavDropdown align='end' title="Login" id="navbarScrollingDropdown" flip>
                      <NavDropdown.Item as={Link} to={"/Login"} >Login</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/SignUp"}>
                        Sign Up
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/#"}>
                        Sign Out
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/MyProfile"}>
                        My Profile
                      </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
    }