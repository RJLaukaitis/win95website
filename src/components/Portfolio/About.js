import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './About.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';

const About = () => {
    const navigate = useNavigate();

    const handleContactClick= () => navigate('/contact');

    return (
        <div className="page-layout">
            <VerticalMenu/>
            <div className="About-content">
            <div className="Welcome">
            <h1>Welcome</h1>
            </div>
            <div className="paragraph">
                <p>
                    I'm a Sophomore studying Computer Science and Business at Lehigh University in Bethlehem, PA.
                </p>
                <p>
                    Thank you for stopping by my portfolio. If you wish to get in touch with me or want to send me a message you can contact me here. All messages get sent to my personal email address and I'll get back to you as soon as i can.
                </p>
                <p>
                This page is inspired by Henry Heffernan's personal portfolio, please check out his page here.
                </p>
            </div>
            </div>
        </div>
    );
};

export default About;