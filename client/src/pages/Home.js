import React from 'react';
import Button from 'react-bootstrap/Button';
import { Accordion } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../media/forestimg.jpg';



export default function Home() {
   
    const posts = [
        { id: 1, title: 'Get the "Create Post Button" working', content: 'Here we will pull data from the db when the users creates a new post! We will need to get the "Creat New Post" button working to query the data base and setup the website to allow the user to input data in text, image, code blocks and videos!'},
        { id: 2, title: 'Add static background.', content: 'I attempted to add a background to this homepage but either my pathing to the assets foler is incorrect in the inner css below. I think the image I added to assests with a gradient over it would look grear for a start.' },
        { id: 3, title: 'Getting Login/Sign up Backend Working', content: 'Setting up the login/sign up backend to register for the website.' },
        { id: 4, title: 'Setup the "About" page', content: 'We will still need to setup the about page. The "About" page should have the same static background as the home page.' },
        { id: 5, title: 'TROY ADD THE FOOTER AND PROFILE PLZ', content: 'Add the footer and my profile page to the project so our backend team can get those working with user input aas well.' }, 
      ];
    
      return (
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundPosition: 'static',
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          minWidth: '100vw',
          padding: '10px'
          }}>
          <h1 className='homepage-text text-center' xs='auto' style={{marginTop: '50px', marginBottom: '50px', color: '#B5A478'}}>Explore the Forest</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', }}>
            <input className="rounded-pill search-bar" type="text" placeholder="Search" style={{ width: '300px', color: '#d4cbb2', border: 'none'}} />
          </div>
          <div>
          <button style={{marginBottom: '60px'}} className="rounded-pill newleaf-bttn">Grow New Leaf</button>
          </div>
          <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            padding: '10px',
          }}></div>
      <h1 className='homepage-text text-center' xs='auto' style={{ marginTop: '50px', marginBottom: '50px', color: '#B5A478' }}>Explore the Forest</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', }}>
        <input className="rounded-pill search-bar" type="text" placeholder="Search" style={{ width: '300px', color: '#d4cbb2' }} />
      </div>
      <div id='newLeaf'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Grow New Leaf</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Leaf Title</Form.Label>
                  <Form.Control type="text" placeholder="Something inspiring" />
                  <Form.Text className="text-muted">
                    The title should accurately reflect what your leaf is about, but within 256 characters.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContent">
                  <Form.Label>Leaf Content</Form.Label>
                  <Form.Control as="textarea" placeholder="The good stuff" />
                </Form.Group>
                <Button className="rounded-pill" variant="success" type="submit">
                  Submit Leaf
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        padding: '10px',
        flexWrap: 'wrap',
        flexShrink: '0',
        flexBasis: '400px',
      }}>
        {posts.map(post => (
          <div key={post.id} style={{
            marginBottom: '90px',
            width: '100%',
            /*alignSelf: 'stretch', */
            flexWrap: 'wrap',
            flexShrink: '0',
            flexBasis: '400px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#F4F1E6',
            borderRadius: '1rem',
            fontFamily: 'Roboto',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            margin: '10px',

          }}>
            <div style={{ marginRight: '10px' }}>
              <FontAwesomeIcon icon={faArrowUp} style={{ color: 'green' }} />
              <p style={{ margin: '0', textAlign: 'center' }}>{post.upvotes}</p>
              <FontAwesomeIcon icon={faArrowDown} style={{ color: 'red' }} />
            </div>
            <div style={{ flex: '1' }}>
              <h3 style={{ textAlign: 'center' }}>{post.title}</h3>
              <p>{post.content}</p>
              <p style={{ margin: '0' }}>
                Posted by {post.username}USERNAME HERE at TIME HERE{post.time}
              </p>

              <button className="rounded mb-0" style={{ marginTop: '10px', marginRight: '10px' }}>Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}