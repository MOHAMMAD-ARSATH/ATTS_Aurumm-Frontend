import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import aurummLogo from "../assets/aurummlogo.png";

const UserNav = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <Container
        fluid
        className={`nav-container ${isScrolled ? "full-width" : ""}`}
      >
        <Navbar.Brand as={Link} to="/">
          <img
            src={aurummLogo}
            alt="Logo"
            className="nav-logo"
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <NavDropdown
              title="Product & Features"
              className={`nav-dropdown ${isMobileDropdownOpen ? "active" : ""}`}
              onClick={toggleMobileDropdown}
            >
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => handleNavigation("au-pay")}
              >
                <img
                  src="https://aurumm.co/_next/static/media/symbol.2d89ec5c.svg"
                  alt="icon"
                  className="dropdown-logo"
                />
                <div>
                  <strong>AuPay</strong>
                  <p>Gold savings scheme payment platform</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => handleNavigation("au-sales")}
              >
                <img
                  src="https://aurumm.co/_next/static/media/symbol.2d89ec5c.svg"
                  alt="icon"
                  className="dropdown-logo"
                />
                <div>
                  <strong>AuSales</strong>
                  <p>Comprehensive jewellery store ERP</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item"
                onClick={() => handleNavigation("au-shop")}
              >
                <img
                  src="https://aurumm.co/_next/static/media/symbol.2d89ec5c.svg"
                  alt="icon"
                  className="dropdown-logo"
                />
                <div>
                  <strong>AuShop</strong>
                  <p>Online jewellery shopping platform</p>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Link to="/contact" className="demo-btn">
              Get a Free Demo <FaArrowRight className="arrow-icon" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNav;