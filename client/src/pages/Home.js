import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import video from '../media/forest.mp4';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


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
          backgroundImage: "url('./src/assets/forestbackground.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          padding: '40px'
        }}>
          <h1>Explore the Forest</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <input className="rounded-pill" type="text" placeholder="Search" style={{ width: '50%', marginRight: '10px' }} />
            <button className="rounded-pill">Create New Post</button>
          </div>
          <p >The Forest:</p>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '50%',
            padding: '20px'
          }}>
           {posts.map(post => (
                 <div key={post.id} style={{ 
                     marginBottom: '20px', 
                    width: '100%', 
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
                    borderRadius: '5px', 
                    padding: '20px', 
                    display: 'flex',
                    alignItems: 'center'
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

                    <button style={{ marginTop: '10px', marginRight: '10px' }}>Comment</button>
                    </div>
                 </div>
                ))}
          </div>
        </div>
      );
    }
  

    
    
    /*return ([
    <Container>
        <Row>
            <Col>
                <div class="embed-responsive embed-responsive-16by9">
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={video} type="video/mp4"  />
                    </video>
                </div>
                <div id="vidText" class="carousel-caption">
                    <h1 className="display-3">Cheat Leaf</h1>
                    <p className="lead mb-0">A forest of information with an emphasis on obtaining knowledge quickly</p>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Col>
        </Row>
    </Container>
    ]);
} 
*/
