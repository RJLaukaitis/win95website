import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Portfolio/Home";
import About from "../Portfolio/About";
import '98.css';
import Projects from "../Portfolio/Projects";
import Contact from "../Portfolio/Contact";
import Experience from "../Portfolio/Experience";
import Blender from "../Portfolio/Blender";

function Navigator(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/blender" element={<Blender />} />

            </Routes>
        </Router>
    );
}

export default Navigator;