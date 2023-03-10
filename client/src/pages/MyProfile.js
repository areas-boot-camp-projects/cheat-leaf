import React, { useState }from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { deleteTokenFromLocalStorage, getTokenFromLocalStorage, decodeToken } from '../helpers/auth';

import backgroundImage from '../media/forestimg.jpg';
import pfp from '../media/daboy.jpg'

let token = getTokenFromLocalStorage();
    let username = 'Sign In';
if (token) {
  username = decodeToken(token).data.username
}



export default function MyProfile() {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  return (
    <div className="" style={{ backgroundImage: "url(" + backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <label htmlFor="profilePicture" className="profile-picture-upload">
                  <MDBCardImage src={profilePicture ? URL.createObjectURL(profilePicture) : pfp}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ maxWidth: '150px', height: '125px', aspectRatio: '1/1', zIndex: '1' }} />
                    <div className="profile-picture-upload-overlay">
                      <i className="fas fa-camera"></i>
                      <span>Choose file</span>
                    </div>
                  </label>
                  <input
                    id="profilePicture"
                    type="file"
                    onChange={handleProfilePictureChange}
                    style={{ display: 'none' }}
                  />
                 </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{username}</MDBTypography>
                  <MDBCardText>Your Body</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                 <div> 
                    <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    in Production
                    </MDBBtn>
                  </div>
                <div className="d-flex justify-content-end text-center py-1">
                    <div>
                    <MDBCardText className="mb-1 h5">3</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Leafs</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">3</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent Leafs</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}




/*export default function MyProfile() {
  return (
    <div className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: "url(" + backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard style={{backgroundColor: '#F4F1E6'}}>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#493E20', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={pfp}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography className='profile-name' tag='h5' style={{marginBottom:'3px'}}>Da Boy</MDBTypography>
                  <MDBCardText>San Francisco</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-white" style={{ backgroundColor: '#B5A478' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">284</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Leaves</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">19</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Branches</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">1202</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#F4F1E6' }}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Works at Apple</MDBCardText>
                    <MDBCardText className="font-italic mb-0">UC Berkeley</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent Leaves</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src=" "
                      alt=" " className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src=" "
                      alt=" " className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src=" "
                      alt=" " className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src=" "
                      alt=" " className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
  }*/