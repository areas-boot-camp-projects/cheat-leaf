import { Container, Row, Col } from "react-bootstrap";
//import logo from "../assets/img/logo.svg";
//import navIcon1 from "../assets/img/nav-icon1.svg";
//import navIcon2 from "../assets/img/nav-icon2.svg";
//import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-left">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>

      <Row className="align-items-center">
      <Col size={12} sm={6}>
        <ul>
            <li>Use product at your own risk</li>
            <li>We are not liable for any information shared or posted</li>
            <li> Be mindful of contributions</li>
        </ul>
      </Col>
      </Row>
      <Row className="align-items-center">
      <Col size={12} sm={6}>
        <ul>
            <li>About Us</li>
            <li>Github</li>
            <li>Privacy</li>
        </ul>
      </Col>
      </Row>
    </footer>
  )
}