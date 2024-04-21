import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './About.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import WorkImage from '../../images/work.jpg';
import MEImage from '../../images/composite.png';

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
            <div className="introduction">
                <p>
                    I'm currently a sophomore at Lehigh University working towards a dual bachelors of science degree in Computer Science & Business.
                </p>
                <p>
                    Thank you for stopping by my portfolio. This page was inspired by Henry Heffernan's personal portfolio which can be found here. It was a joy to create this site and refine my javascript and css skills, so please take some time to relax and unwind with some late 90s nostalgia. 
                </p>
            </div>
            <hr class= "solid"></hr>
            <div className="about-me-title">
                About Me
            </div>
            <div className="about-me-paragraph">
                <p>
                    In 2003, I was born in Kirkland, Washington. Kirkland is where I've grown up and still call home to this day. From a young age, my passion for technology and creativity has been a defining aspect of my life. I would spend countless hours fiddling around with our old iMac, attempting to branch out into coding, game development, and graphic design (of course not knowing how intricate those professions all were). 
                </p>
                <div className="Work-image">
                <img src = {WorkImage} alt="" />
                <p>
                    Figure 1: A master software engineer at only 5 years old.
                </p>
                </div>
            </div>
            <div className="about-me-paragraph-2">
                <p>
                    I only truly stepped into the world of coding when I was a freshman in college. I enrolled in an introductory course and from the first day I was hooked. After achieving great results in the class, I switched into the Computer Science and Business Inter-disciplinary program to commit myself to Computer Science while also developing a strong business background. I'm currently on track to graduate in Spring of 2026 and I can't wait to see where my journey still takes me.
                </p>
            </div>
            <div className="about-me-paragraph-3">
                <p>
                    Aside from academics, I am very involved on campus. I am apart of the Sigma Phi Epsilon fraternity where i hold an executive board position as the Vice President of the SigEp Learning Community. I am also a Stock Analyst for the TAMID consulting group, where we work closely with Israeli based startups looking to break into the U.S. market, offering support and advice on potential business decisions. 
                </p>
                <div className="ME-image">
                <img src = {MEImage} alt="" />
                <p>
                    Figure 2: Me in 2024
                </p>
                </div>
            </div>
            <div className="about-me-paragraph-4">
                <p>
                    Thank you for taking the time to read about myself! I hope you found this short glimpse into my life interesting and I look forward to possibly connecting and sharing more about my passions and interests. Have fun enjoying the ambience and the monotone teal background of windows 98.
                </p>
            </div>
            </div>
        </div>
    );
};

export default About;