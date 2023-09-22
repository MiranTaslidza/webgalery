// Layout.js
import React from "react";
import Navbar from "../navbar/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "..//header/Slider";
import "./Layout.css";

function Layout({ children, showSlider }) {
  return (
    <div>
      {/* Prikaži slider samo ako showSlider ima vrednost true */}
      {showSlider && <Slider />}
      <Row>
        {/* prva kolona za meni bar */}
        <Col sm={2} className="menu">
          <Navbar />
        </Col>

        {/* druga kolona za specifičan sadržaj */}
        <Col sm={9} className="product">
          {children}
        </Col>
      </Row>
    </div>
  );
}

export default Layout;
