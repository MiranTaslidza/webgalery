// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Uvezivanje Link komponente za navigaciju
import { FiMenu,  FiArrowLeft } from 'react-icons/fi';
import { FaHome, FaUser, FaPhone, FaVideo } from 'react-icons/fa';


import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
      {isExpanded ? (
        <div className="toggle-button right" onClick={toggleSidebar}>
          <FiArrowLeft />
        </div>
      ) : (
        <div className="toggle-button" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      )}
      </div>
      <nav>
  <ul>
    <li>
      <Link to="/">
        <FaHome /> Home
      </Link>
    </li>
    <li>
      <Link to="/contact">
        <FaPhone /> Contact
      </Link>
    </li>
    <li>
      <Link to="/video">
        <FaVideo /> Video
      </Link>
    </li>
  </ul>
</nav>
    </div>
  );
};

export default Sidebar;
