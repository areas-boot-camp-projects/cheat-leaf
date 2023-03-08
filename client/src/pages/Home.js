// React.
import React, { useState } from "react";

// UI.
import Button from "react-bootstrap/Button";
import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../media/forestimg.jpg";

// API and authentication.
import { useMutation } from "@apollo/client"
import { ADD_LEAF } from "../gql/mutations"
import { getTokenFromLocalStorage, decodeToken } from "../helpers/auth"

export default function Home() {
  
  // ** It would be nice to move some of this into a separate components:
  // ** - NewLeafForm
  // ** - SearchBar
  // ** - LeafList

  // Set the form data initial state.
  const [formData, setFormData] = useState({
    ownerUsername: "",
    title: "",
    content: "",
  })

  // Update the form data state.
  function updateFormData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Set up the mutation.
  const [addLeaf] = useMutation(ADD_LEAF)

  // Add a new leaf.
  async function submitFormData(e) {
    e.preventDefault()
    // Get the token.
    const token = getTokenFromLocalStorage()
    // If there’s no token, don’t submit the form.
    if (!token) {
      console.log("Token not found.")
      return
    }
    // Else , decode the token.
    const decodedToken = decodeToken(token)
    // Call the API
    try {
      const { data } = await addLeaf({
        variables: { ...formData, ownerUsername: decodedToken.data.username },
      })
      console.log(data) // **
    } catch (err) {
      console.log(err)
    }
    // Clear the form data.
    setFormData({
      ownerUsername: "",
      title: "",
      content: "",
    })
  }

  const posts = [
    {
      id: 1,
      title: "Get the “Create Post Button” working",
      content: "Here we will pull data from the db when the users creates a new post! We will need to get the “Creat New Post” button working to query the data base and setup the website to allow the user to input data in text, image, code blocks and videos!"
    },
    { id: 2, title: "Add static background.", content: "I attempted to add a background to this homepage but either my pathing to the assets foler is incorrect in the inner css below. I think the image I added to assests with a gradient over it would look grear for a start." },
    { id: 3, title: "Getting Login/Sign up Backend Working", content: "Setting up the login/sign up backend to register for the website." },
    { id: 4, title: "Setup the “About” page", content: "We will still need to setup the about page. The “About” page should have the same static background as the home page." },
    { id: 5, title: "TROY ADD THE FOOTER AND PROFILE PLZ", content: "Add the footer and my profile page to the project so our backend team can get those working with user input aas well." }, 
  ];
    
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: "url(" + backgroundImage + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "fit",
      minHeight: "100vh",
      minWidth: "100vw",
      padding: "10px"
    }}>

      <h1 className="homepage-text text-center" xs="auto" style={{ marginTop: "50px", marginBottom: "50px", color: "#B5A478" }}>Explore the Forest</h1>
      
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", }}>
        <input className="rounded-pill search-bar" type="text" placeholder="Search" style={{ width: "300px", color: "#d4cbb2" }} />
      </div>

      <div id="newLeaf">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" style={{ marginBottom: "70px" }}>
            <Accordion.Header>Grow New Leaf</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Leaf Title</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Something inspiring"
                    name="title"
                    value={formData.title}
                    onChange={updateFormData}
                  />

                  <Form.Text className="text-muted">
                    The title should accurately reflect what your leaf is about, but within 256 characters.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContent">
                  <Form.Label>Leaf Content</Form.Label>

                  <Form.Control
                    as="textarea"
                    placeholder="The good stuff"
                    name="content"
                    value={formData.content}
                    onChange={updateFormData}
                  />

                </Form.Group>
                <Button
                  className="rounded-pill"
                  variant="success"
                  type="submit"
                  onClick={submitFormData}
                >
                  Submit Leaf
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        padding: "10px",
        flexWrap: "wrap",
        flexShrink: "0",
        flexBasis: "400px",
      }}>
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              width: "80%",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F4F1E6",
              borderRadius: "1rem",
              fontFamily: "Roboto",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              margin: "15px",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} />
              <p style={{ margin: "0", textAlign: "center" }}>{post.upvotes}</p>
              <FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} />
            </div>

            <div style={{ flex: "1" }}>
              <h3 style={{ textAlign: "center" }}>
                {post.title}
              </h3>
              <p>
                {post.content}
              </p>
              <p style={{ margin: "0" }}>
                Posted by {post.username}USERNAME HERE at TIME HERE{post.time}
              </p>
              <button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
                Comment
              </button>
              <button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
                Edit
              </button>
              <button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}