import React from "react"
import {Button, Col, Container, Form, Row, Card} from "react-bootstrap";
import Register from "./Register.js"

import '../style/Login.css'

function Login(){
    return (
        <Row>
                    <Col>
                    <div class="loginCard">
                    <h3> Login </h3>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <br/>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div>
                    </Col>
                    <Col>
                    <div class="loginCard">
                    <Register/>
                    </div>
                    </Col>
        </Row>
    );
}

export default Login;
