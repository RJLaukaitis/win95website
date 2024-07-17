import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalMenu.css';

function VerticalMenu() {
  const activeStyle = { color: 'red' }; // Style object for the active state
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false); // State for submenu visibility

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

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
      <div className="menu-item" onClick={toggleSubMenu}>
        <span className="star">*</span> Projects
      </div>
      {isSubMenuVisible && (
        <div className="submenu">
          <NavLink to="/blender" activeStyle={activeStyle} className="submenu-item">
          <span className="star">*</span> Software
          </NavLink>
          <NavLink to="/software" activeStyle={activeStyle} className="submenu-item">
          <span className="star">*</span> Renders
          </NavLink>
        </div>
      )}
      <NavLink to="/contact" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> Contact
      </NavLink>
    </div>
  );
}

export default VerticalMenu;
