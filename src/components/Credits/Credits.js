import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Credits.css';


const credits = [
    { role: 'Programming', name: 'Ronald Laukaitis' },
    { role: 'Modeling,Texturing,UVs,', name: 'Ronald Laukaitis' },
    { role: 'Environment Models', name: 'Sean Nicolas' },
    { role: 'Ambient PC sfx', name: 'Kyle Seeley' },
    { role: 'Windows Icons', name: 'Microsoft' },
    { role: 'Office Ambience', name: 'Sounds Recorded' },
    { role: 'Inspiration/Reference', name: 'Henry Heffernan' },
    // Add more credits as needed
];

const Credits = () => {
    return (
        <div className="Credits-Content">
            <div className="CreditsHeader">
                <h1>Credits</h1>
                <h2>RonaldLaukaitis.com, 2024</h2>
            </div>
            <div className="creditList">
                {credits.map((credit, index) => (
                    <p
                        key={index}
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        {credit.role} .............. {credit.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Credits;

