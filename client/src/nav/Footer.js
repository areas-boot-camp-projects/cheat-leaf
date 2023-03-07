import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function App() {
  return (
    <MDBFooter bgColor='none' className='text-center text-white text-lg-left' style={{backgroundColor: '#322B18'}}>
      <MDBContainer className='pt-1'>
        <section className='mb-1'>
          <Button
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='https://twitter.com/cheat_leaf?s=21&t=D6yw3SAWyQ1PnfRHMIjFBQ'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab className='fa-twitter' />
          </Button>

          <Button
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='https://instagram.com/cheat_leaf?igshid=YmMyMTA2M2Y='
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab className='fa-instagram' />
          </Button>

          <Button
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </Button>

          <Button
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1'
            href='https://github.com/areas-boot-camp-projects/cheat-leaf'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MDBIcon fab className='fa-github' />
          </Button>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' style={{textDecoration: 'none'}} href=' '>
          cheatleaf.com
        </a>
      </div>
    </MDBFooter>
  );
}