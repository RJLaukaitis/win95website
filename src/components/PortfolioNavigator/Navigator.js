import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Portfolio/Home";
import About from "../Portfolio/About";
import '98.css';
import Projects from "../Portfolio/Projects";

function Navigator(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default Navigator;