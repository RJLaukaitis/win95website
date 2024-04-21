import React from 'react';
import { NavLink } from 'react-router-dom';

function VerticalMenu() {
  return (
    <div className="vertical-menu">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink to="/experience" activeClassName="active">Experience</NavLink>
      <NavLink to="/projects" activeClassName="active">Projects</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </div>
  );
}

export default VerticalMenu;