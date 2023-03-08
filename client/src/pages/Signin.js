// React.
import React, { useState } from "react";
import { Button } from "react-bootstrap";

// UI.
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput,  MDBCheckbox, MDBValidation, MDBValidationItem} from "mdb-react-ui-kit"
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
    <MDBValidation>
      
      <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image min-vh-100" style={{backgroundImage: "url(" + backgroundImage + ")", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">

            <MDBCard className="bg-white m-5" style={{borderRadius: "1rem", maxWidth: "500px"}}>
              <MDBCardBody className="p-5 w-100 d-flex flex-column">

                <h2 className="fw-bold mb-5 text-center">Sign In</h2>

                <MDBValidationItem feedback='Please provide an email.'>
                  <MDBInput 
                    wrapperClass="mb-4 w-100"
                    placeholder="Email"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    name="email"
                    value={formData.email}
                    onChange={updateFormData}
                  />
                </MDBValidationItem>

                <MDBInput
                  wrapperClass="mb-5 w-100"
                  placeholder="Password"
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


              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </MDBValidation>
  )
}

export default SignIn
