import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";

import aurummLogo from "../assets/aurummlogo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center py-3 border-bottom">
          <Col xs="auto">
            <div className="d-flex gap-5">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </Col>

          <Col xs="auto" className="text-end">
            <div className="cta-box">
              <span className="footer-text me-5">Ready To Begin?</span>
              <Link to="/contact">
                <Button variant="success" className="cta-button">
                  Get a Demo
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="py-4 gx-5">
          <Col md={3} className="mb-4">
            <Link to="/" className="footer-link">
              <img
                src={aurummLogo}
                alt="AURUMM Logo"
                className="footer-logo mb-3"
              />
            </Link>
            <p className="footer-text">
              World-class technical solutions for elevated jewellery store
              operations.
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-heading mb-3">QUICKLINKS</h6>
            <ul className="list-unstyled footer-link">
              <li className="mb-2">
                <span
                  className="footer-text"
                  onClick={() => handleNavigation("au-cards")}
                >
                  Product
                </span>
              </li>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <li className="mb-2">
                  <span className="footer-text">Contact Us</span>
                </li>
              </Link>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-heading mb-3">SOLUTIONS</h6>
            <ul className="list-unstyled footer-link">
              <li className="mb-2">
                <span
                  className="footer-text"
                  onClick={() => handleNavigation("au-pay")}
                >
                  AU Pay
                </span>
              </li>
              <li className="mb-2">
                <span
                  className="footer-text"
                  onClick={() => handleNavigation("au-sales")}
                >
                  AU Sales
                </span>
              </li>
              <li className="mb-2">
                <span
                  className="footer-text"
                  onClick={() => handleNavigation("au-shop")}
                >
                  AU Shop
                </span>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="footer-heading mb-3">Contact</h6>
            <p className="footer-text mb-3">
              <a href="tel:+919790484764">+91 9790484764</a>
            </p>

            <h6 className="footer-heading mb-3">Email</h6>
            <p className="footer-text mb-3">
              {" "}
              <a href="mailto:arsathmd11@gmail.com" className="email-link">
                arsathmd11@gmail.com
              </a>
            </p>
          </Col>
        </Row>
        <hr />

        <Row className="py-2 align-items-center">
          <Col md={12} className="footer-text text-center">
            Aurumm made by <strong>Mohammad Arsath.</strong>
            <span className="d-block d-md-none"></span>{" "}
            All Rights Reserved © 2025.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;