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
import SearchBar from "../components/SearchBar";
import LeafList from "../components/LeafList";

export default function Home() {
  // ** Todo: Move NewLeafForm to its own component.
  // ** Warning: This component is sending a refetch to LeafList. If we move this to its own component, we’ll need to figure out how to pass the refetch to LeafList from NewLeafForm.

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
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      minWidth: "100vw",
      padding: "10px"
    }}>

      <h1 id="mainText" className="display-1 text-center" xs="auto" style={{ marginTop: "50px", marginBottom: "50px" }}>Explore the Forest</h1>

      <SearchBar />

      <div id="newLeaf">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" style={{ marginBottom: "70px" }}>
            <Accordion.Header className="accordian-button">Grow New Leaf</Accordion.Header>
            <Accordion.Body className="accordian-body">
            <Accordion.Header id="newLeafHeader">Sprout a New Leaf</Accordion.Header>
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
                  Sprout
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