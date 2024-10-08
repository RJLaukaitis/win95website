import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Portfolio/Home";
import About from "../Portfolio/About";
import Projects from "../Portfolio/Projects";
import Contact from "../Portfolio/Contact";
import Experience from "../Portfolio/Experience";
import Blender from "../Portfolio/Blender";
import Software from "../Portfolio/Software";
import Shutdown from "../Shutdown/Shutdown";
import Startup from "../Startup/Startup";

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
                <Route path="/software" element={<Software />} />
                <Route path="/shutdown" element={<Shutdown />} />
                <Route path="/startup" element={<Startup />} />
            </Routes>
        </Router>
    );
}

export default Navigator;