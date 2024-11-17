import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarSecond = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow custom-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="fw-bold me-3">Maraka Humanitarian Observatory</span>
          <img
            src="/Picture1.png" // Replace with your logo URL
            alt="MHO"
            width="100"
            height="70"
            className="me-3"
          />
          <img
            src="/Picture2.png" // Replace with your logo URL
            alt="MH2"
            width="100"
            height="70"
            className="me-3"
          />
          <img
            src="/Picture3.png" // Replace with your logo URL
            alt="MH3"
            width="100"
            height="70"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBarSecond;
