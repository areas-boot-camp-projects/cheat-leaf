import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import backgroundImage from '../media/forestimg.jpg';

function Signup() {

    /*const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }; */

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: "url(" + backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{borderRadius: '1rem', maxWidth: '500px'}}>
        <MDBCardBody className='p-5'>
          <h2 className="fw-bold text-center mb-5">Sign Up</h2>
          <MDBInput wrapperClass='mb-2' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-2' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-2' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-5 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;





/* import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'react-bootstrap'

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
*/

