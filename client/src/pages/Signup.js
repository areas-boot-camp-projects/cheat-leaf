// React.
import React, { useState } from "react"
import { Button } from "react-bootstrap";

// UI.
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox,  MDBValidation, MDBValidationItem } from "mdb-react-ui-kit"
import backgroundImage from "../media/forestimg.jpg"

// API and authentication.
import { useMutation } from "@apollo/client"
import { SIGN_UP_USER } from "../gql/mutations"
import { saveTokenToLocalStorage } from "../helpers/auth"

// Component.
function SignUp() {
  // Set the form data initial state.
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  // Update the form data state.
  function updateFormData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Set up the mutation.
  const [signUpUser] = useMutation(SIGN_UP_USER)

  // Sign up the user.
  async function submitFormData(e) {
    e.preventDefault()
    try {
      const { data } = await signUpUser({
        variables: { ...formData },
      })
      saveTokenToLocalStorage(data.signUpUser.token)
    } catch (err) {
      console.log(err)
    }
    // Clear the form data.
    setFormData({
      username: "",
      email: "",
      password: "",
    })
  }

  return (
    <MDBValidation>
        <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image min-vh-100" style={{backgroundImage: "url(" + backgroundImage + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{borderRadius: "1rem", maxWidth: "500px"}}>
            <MDBCardBody className="p-5">
            <h2 className="fw-bold text-center mb-5">Sign Up</h2>
            
                <MDBValidationItem feedback='Username is required.' invalid>
                    <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Username"
                        size="lg"
                        id="form1"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={updateFormData}
                        required
                    />
                </MDBValidationItem>
                
                <MDBValidationItem feedback='Email is required.'>
                    <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Email"
                        size="lg"
                        id="form2"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={updateFormData}
                        required
                    />
                </MDBValidationItem>

                <MDBValidationItem feedback='Password is required.'>
                    <MDBInput
                        wrapperClass="mb-5"
                        placeholder="Password"
                        size="lg"
                        id="form3"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={updateFormData}
                        required
                    />
                </MDBValidationItem>

            <MDBValidation>
                <div className="d-flex flex-row justify-content-center mb-4">
                    <MDBCheckbox
                    name="flexCheck"
                    id="invalidCheck"
                    label="I agree to all statements in terms of service."
                    required
                    />
                </div>
            </MDBValidation>   

            <Button
                className="mb-5 w-100 gradient-custom-4"
                size="lg"
                onClick={submitFormData}
            >
                Sign Up
            </Button>

            </MDBCardBody>
        </MDBCard>
        </MDBContainer>
    </MDBValidation>
  )
}

export default SignUp
