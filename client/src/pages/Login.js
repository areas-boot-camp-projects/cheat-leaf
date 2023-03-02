import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'react-bootstrap'


export default function Login() {
        return (
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}} >
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter you email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter you password" />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        )
    }
