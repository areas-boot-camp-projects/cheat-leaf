import React from 'react'
import axios from '../api/axios';
import { setAuthToken } from "../helpers/setAuthToken";
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




const onSubmit = (email, password) => {
  const loginPayload = {
      email: ' ',
      password: ' '
  }

  axios.post("", loginPayload)
      .then(response => {
      const token = response.data.token;
  
      localStorage.setItem("token", token);

      setAuthToken(token);

      window.location.href = '/'
  })
  .catch(err => console.log(err));
};

export default Signup;
