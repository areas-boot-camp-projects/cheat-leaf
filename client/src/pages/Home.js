// React.
import React, { useState } from "react";

// UI.
import Button from "react-bootstrap/Button";
import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import backgroundImage from "../media/forestimg.jpg";

// API and authentication.
import { useMutation, useQuery } from "@apollo/client"
import { ADD_LEAF } from "../gql/mutations"
import { QUERY_LEAFS } from "../gql/queries"
import { getTokenFromLocalStorage, decodeToken } from "../helpers/auth"

// Child components.
import LeafList from "../components/LeafList";

export default function Home() {

  // ** It would be nice to move some of this into a separate components:
  // ** - NewLeafForm
  // ** - SearchBar
  // ** - LeafList √

  // Set the form data initial state.
  const [formData, setFormData] = useState({
    ownerUsername: "",
    title: "",
    content: "",
  })

  // Update the form data state.
  function updateFormData(e)
  {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Set up the mutation.
  const [addLeaf] = useMutation(ADD_LEAF, {
    refetchQueries: ["QUERY_LEAFS"],
  })

  // Set up the query.
  const { data, loading, error, refetch } = useQuery(QUERY_LEAFS)

  // Add a new leaf.
  async function submitFormData(e)
  {
    e.preventDefault()
    // Get the token.
    const token = getTokenFromLocalStorage()
    // If there’s no token, don’t submit the form.
    if (!token)
    {
      console.log("Token not found.")
      return
    }
    // Else , decode the token.
    const decodedToken = decodeToken(token)
    // Call the API
    try
    {
      const { data } = await addLeaf({
        variables: { ...formData, ownerUsername: decodedToken.data.username },
      })
      // Refetch the leafs.
      refetch()
    } catch (err)
    {
      console.log(err)
    }
    // Clear the form data.
    setFormData({
      ownerUsername: "",
      title: "",
      content: "",
    })
  }

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

      <LeafList refetch={refetch} />

    </div>
  );
}