import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalMenu.css';

function VerticalMenu({ showSubmenu }) {
  const activeStyle = { color: 'red' };

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

      {showSubmenu && (
        <>
        <NavLink to="/software" activeStyle={activeStyle} className="submenu-item">
            <span className="star">*</span> Software
          </NavLink>
          <NavLink to="/blender" activeStyle={activeStyle} className="submenu-item">
            <span className="star">*</span> Renders
          </NavLink>
        </>
      )}

      <NavLink to="/contact" activeStyle={activeStyle} className="menu-item">
        <span className="star">*</span> Contact
      </NavLink>
    </div>
  );
}

export default VerticalMenu;
