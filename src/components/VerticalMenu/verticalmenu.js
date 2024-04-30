import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalMenu.css';

function VerticalMenu() {
  const activeStyle = { color: 'red' }; // Style object for the active state


  return (
    <div className="vertical-menu">
      <NavLink to="/home" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> About
      </NavLink>
      <NavLink to="/experience" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> Experience
      </NavLink>
      <NavLink to="/projects" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> Projects
      </NavLink>
      <NavLink to="/contact" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> Contact
      </NavLink>
    </div>
  );
}

export default VerticalMenu;
