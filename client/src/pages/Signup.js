import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'react-bootstrap'


export default function SignUp() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col className='pt-3'>
                        <Form>
                            <Form.Group >
                                <Form.Label>Enter your email</Form.Label>
                                <Form.Control type="email" placeholder="Enter you email" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Create a password</Form.Label>
                                <Form.Control type="password" placeholder="Enter you password" />
                            </Form.Group>
                            <Button type="submit">Sign Up!</Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
