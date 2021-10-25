import React from "react"
import {Button, Col, Container, Form, Row, Card} from "react-bootstrap";

function Login(){
    return (
        <div className="App">
           
            
            <Container>
                <Row>
                    <Col lg={4} md={3} sm={6}>
                        
                    </Col>

                    <Col lg={4}md={6} sm ={12}>
                    <br></br>
                    <br></br>
                    <h1>Login to your account</h1>
                    <br></br>
                    <hr />
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h4>Email address</h4></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            (We'll never share your email with anyone else.)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h4>Password</h4></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Save Password     " />
                        </Form.Group>

                        <br>
                        </br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
