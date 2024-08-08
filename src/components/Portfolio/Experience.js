import React from "react";
import './Experience.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';

const Experience = () => {
    return (
        <div className="Page-Content">
            <VerticalMenu/>
            <div className="Experience-content">
            <div className="ExperienceHeader">
                <h1>
                    Experience
                </h1>
            </div>
            <div className="introduction">
                Here is a quick summary of my past work experience and roles within several companies.
            </div>
            <hr class="solid"></hr>
            <div className="Research">
                <h1>Lehigh University</h1>
                <h2>Undergraduate Research Assistant, May 2024 - August 2024</h2>
                <p>
                • Collaborated with a team of five students to develop a web application for tracking student integrity violations, enabling faculty to report and store instances of academic misconduct.<br></br>
                • Redesigned the user interface to enhance usability and streamline the reporting process for faculty members.<br></br>
                • Re-engineered the form component to optimize functionality, reducing lines of code and simplifying implementation..<br></br>
                </p>
            </div>
            <div className="Willows">
                <h1>Willows Run Golf Club</h1>
                <h2>Outside Staff, May 2023 - August 2023</h2>
                <p>
                • Operated driving range picker equipment with a focus on efficiency and safety.<br></br>
                • Conducted thorough cleaning and maintenance of golf carts to ensure optimal customer satisfaction.<br></br>
                • Demonstrated strong organizational skills and attention to detail in the management of equipment and facilities.<br></br>
                </p>
            </div>
            <div className="Chickfila">
            <h1>Chick-Fil-A</h1>
                <h2>Team Member, December 2019 - April 2022</h2>
                <p>
                • Gained valuable customer service experience serving fast paced shifts with 30 team members.<br></br>
                • Worked and managed the register, walked out orders to customers, made drinks and desserts.
                <br></br>
                • Effectively diffused difficult conversations surrounding customer complaints and made decisions to solve and maintain customer  satisfaction.
                <br></br>
                </p>
                </div>
        </div>

        </div>
    );
};

export default Experience;