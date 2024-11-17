import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
// FaIcons.FaBars
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./logo.css";

const MNavbar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => setIsCollapsed(!isCollapsed);
  console.log("isCollapsed", isCollapsed);
  return (
    <Navbar className="bg_color" expand="lg" onToggle={handleToggle}>
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          <div className="logo-container">
            <div className="logo-holder logo-4">
              <div href="">
                <h3 className=" text-white">MARAKA </h3>
                <p className="text-white fs-5"> Humanitarian Observatory</p>
              </div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle className="text-white">
          <FaIcons.FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={!isCollapsed}>
          <Nav className="me-auto">
            {/* Logos will be hidden on collapse */}
            {isCollapsed && (
              <>
                <Nav.Link>
                  <img
                    src="/Picture1.png"
                    alt="MH2"
                    width="100"
                    height="70"
                    className="logo_ me-2"
                  />
                </Nav.Link>
                <Nav.Link>
                  <img
                    src="/Picture2.png"
                    alt="MH2"
                    width="100"
                    height="70"
                    className="logo_ me-2"
                  />
                </Nav.Link>
                <Nav.Link>
                  <img
                    src="/Picture3.png"
                    alt="MH3"
                    width="100"
                    height="70"
                    className="logo_"
                  />
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="collapsed-nav-links">
            <Nav.Link className="text-white nav-item" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white nav-item" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="text-white nav-item" href="#resources">
              Resources
            </Nav.Link>
            <Nav.Link className="text-white nav-item" href="#events">
              Events
            </Nav.Link>
            <Nav.Link
              className="text-white nav-item"
              onClick={() => navigate("/resourcesPDF")}
              href="#about"
            >
              Digital Archive
            </Nav.Link>
            <Nav.Link className="text-white nav-item" href="#gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="text-white nav-item" href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MNavbar;
