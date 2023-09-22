import Nav from "react-bootstrap/Nav";
//za aktivan link
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  //dobivanje trenutne lokacije
  const location = useLocation();

  return (
    <Nav className="navbar flex-column">
      {/* home */}
      <Nav.Link
        className={`link ${location.pathname === "/" ? "active" : ""}`}
        as={Link}
        to="/"
      >
        Home
      </Nav.Link>

      {/* about */}
      <Nav.Link
        className={`link ${location.pathname === "/about" ? "active" : ""}`}
        as={Link}
        to="/about"
      >
        About
      </Nav.Link>

      {/* contact */}
      <Nav.Link
        className={`link ${location.pathname === "/contact" ? "active" : ""}`}
        as={Link}
        to="/contact"
      >
        Contact
      </Nav.Link>

      {/* video */}
      <Nav.Link
        className={`link ${location.pathname === "/video" ? "active" : ""}`}
        as={Link}
        to="/video"
      >
        Video
      </Nav.Link>
    </Nav>
  );
}

export default Navbar;
