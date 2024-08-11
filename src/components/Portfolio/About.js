import React from "react";
import { redirect, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './About.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import WorkImage from '../../images/work.jpg';
import MEImage from '../../images/composite.png';
import Resume from "../Resume/Resume.js";

const About = () => {
    const navigate = useNavigate();
    const handleContactClick= () => navigate('/contact');

    return (
        <div className="page-layout">
            <VerticalMenu showSubmenu={false}/>
            <div className="About-content">
            <div className="Welcome">
            <h1>Welcome</h1>
            </div>
            <div className="introduction">
                <p>
                    I'm currently a sophomore at Lehigh University working towards a dual bachelors of science degree in Computer Science & Business.
                </p>
            </div>
            <Resume/>
            {/* <hr class= "solid"></hr> */}
            <div className="about-me-title">
                About Me
            </div>
            <div className="about-me-paragraph">
                <p>
                    In 2003, I was born in Kirkland, Washington. Kirkland is where I've grown up and still call home to this day. From a young age, my passion for technology and creativity has been a defining aspect of my life. I would spend countless hours playing around with our old iMac, attempting to branch out into coding, game development, and graphic design (of course not knowing how intricate those endeavors all were). 
                </p>
                <div className="Work-image">
                <img src = {WorkImage} alt="" />
                <p>
                    Figure 1: A master software engineer at only 5 years old.
                </p>
                </div>
            </div>
            <div className="about-me-paragraph">
                <p>
                    I only truly stepped into the world of coding when I was a freshman in college. I enrolled in an introductory course and from the first day I was hooked. After achieving great results in the class, I switched into the Computer Science and Business Inter-disciplinary program to commit myself to Computer Science while also developing a strong business background. I'm currently on track to graduate in Spring of 2026 and I can't wait to see where my journey still takes me.
                </p>
            </div>
            <div className="about-me-paragraph">
                <p>
                    Aside from academics, I am very involved on campus. I am apart of the Sigma Phi Epsilon fraternity where i hold an executive board position as the Vice President of the SigEp Learning Community. I am also a Stock Analyst for the TAMID consulting group, where we work closely with Israeli based startups looking to break into the U.S. market, offering support and advice on potential business decisions. 
                </p>
                <hr class= "solid"></hr>
                <div className="interest-title">
                    Interests
            </div>
            <div className="ME-image">
                    <img src={MEImage}></img>
                </div>
            <div className="interest-paragraph">
                <p>
                     In my free time, I really enjoy keeping busy and active. Hitting the gym after class or going for a run around campus is a great way for me to shake off a long day and unwind. On the weekends, you can often find me out on the golf course. I've recently gotten back into playing and it has quickly become one of my favorite hobbies. Even though I usually shoot way over par, I can always be happy about the experience and come up with ways to improve for next time.
                </p>
            </div>
                <div className="interest-paragraph-2">
                    <p>
                        On the more technical side of things, I've been learning Blender to create 3d scenes and renders (How I created this office space). Blender is great for me to explore my creative side and I'm always proud of the results I achieve. You can see a more detailed view of my work over on the projects page.
                    </p>
                </div>
            </div>
            <div className="compositeCaption">
                <p>
                    Figure 2: My 2024 composite photo.
                </p>

            </div>
            <div className="about-me-paragraph-4">
                <p>
                    Thank you for taking time to read about myself! I hope you find the website interesting and I look forward to possibly connecting and sharing more about my passions and interests. Have fun looking through the site and let me know if you have any feedback!
                </p>
            </div>

            </div>
        </div>
    );
};

export default About;