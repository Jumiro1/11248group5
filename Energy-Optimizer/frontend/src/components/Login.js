import React from "react"

function Login(){
    return (
        <div className="App">
            Login 
            
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            
            <Container>
                <Row>
                    <Col lg={4} md={3} sm={6}>
                        
                    </Col>

                    <Col lg={4}md={6} sm ={12}>
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
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Save Password                           " />
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
