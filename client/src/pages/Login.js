// React.
import React, { useState } from "react";
import { Button } from "react-bootstrap";

// UI.
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox} from "mdb-react-ui-kit"
import backgroundImage from "../media/forestimg.jpg"

// API and authentication.
import { useMutation } from "@apollo/client"
import { SIGN_IN_USER } from "../gql/mutations"
import { saveTokenToLocalStorage } from "../helpers/auth"

// Component.
function SignIn() {
  // Set the form data initial state.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // Update the form data state.
  function updateFormData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  
  // Set up the mutation.
  const [signInUser] = useMutation(SIGN_IN_USER)

  // Sign in the user.
  async function submitFormData(e) {
    e.preventDefault()
    try {
      const { data } = await signInUser({
        variables: { ...formData },
      })
      saveTokenToLocalStorage(data.signInUser.token)
    } catch (err) {
      console.log(err)
    }
    // Clear the form data.
    setFormData({
      email: "",
      password: "",
    })
  }

  // JSX.
  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image min-vh-100" style={{backgroundImage: "url(" + backgroundImage + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">

          <MDBCard className="bg-white my-5 mx-auto" style={{borderRadius: "1rem", maxWidth: "500px"}}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">

              <h2 className="fw-bold mb-1 text-center">Sign In</h2>

              <MDBInput 
                wrapperClass="mb-2 w-100"
                label="Email"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                value={formData.email}
                onChange={updateFormData}
              />
              
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={formData.password}
                onChange={updateFormData}
              />

              <MDBCheckbox name="flexCheck" id="flexCheckDefault" className="mb-4" label="Remember password" />

              <Button
                id="sign-in-button"
                size="lg"
                onClick={submitFormData}
              >
                Sign In
              </Button>

              <hr className="my-4" />

              <Button className="mb-2 w-100" size="lg" style={{backgroundColor: "#dd4b39"}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign In with Google
              </Button>

              <Button className="mb-4 w-100" size="lg" style={{backgroundColor: "#3b5998"}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign In with Facebook
              </Button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default SignIn
