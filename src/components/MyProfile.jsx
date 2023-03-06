import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import "./MyProfile.css"


export default function MyProfile() {
    const [user, setUser] = useState({});

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      const fetchUser = async () => {
        const config = {
          headers: { Authorization: `Bearer ${accessToken}` }
        };
        const { data } = await axios.get("http://localhost:3001/users/me", config);
        setUser(data);
        console.log("User Data:", data);
      };
      fetchUser();
    }, []);
  
    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="9" xl="7">
                <MDBCard>
                  <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                      <MDBCardImage src={user.avatar}
                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                      <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                        Edit profile
                      </MDBBtn>
                    </div>
                    <div className="ms-3" style={{ marginTop: '130px' }}>
                      <MDBTypography tag="h5">{user.firstName} {user.lastName}</MDBTypography>
                      <MDBCardText>{user.city}</MDBCardText>
                    </div>
                  </div>
                  <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="d-flex justify-content-end text-center py-1">
                      <div>
                        <MDBCardText className="mb-1 h5">253</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Events Created</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Events Attended</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Recommendations</MDBCardText>
                      </div>
                    </div>
                  </div>
                  <MDBCardBody className="text-black p-4">
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1">About</p>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                        <MDBCardText className="font-italic mb-1">Love some good football and a pint</MDBCardText>
                        <MDBCardText className="font-italic mb-1">Spikeball sometimes too</MDBCardText>
                        <MDBCardText className="font-italic mb-0">Please remember to unattend an event if you are not going to come</MDBCardText>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBCardText className="lead fw-normal mb-0">Recent Events</MDBCardText>
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