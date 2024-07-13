import React, { useEffect } from 'react';
import pingsfx from '../../Audio/Pingsound.mp3';
import './Credits.css';

const credits = [
    { role: 'Programming', name: 'Ronald Laukaitis' },
    { role: 'Monitor Model', name: 'Ronald Laukaitis' },
    { role: 'Environment Models', name: 'Sean Nicolas' },
    { role: 'Ambient PC sfx', name: 'Kyle Seeley' },
    { role: 'Windows Icons', name: 'Microsoft' },
    { role: 'Office Ambience', name: 'Sounds Recorded' },
    { role: 'Solitaire and Minesweeper', name: 'Isaiah Odhner' },
    { role: 'Office Ambience', name: 'Sounds Recorded' },
    { role: 'Business Card', name: 'Pierce&Pierce' },
    { role: 'Inspiration/Reference', name: 'Henry Heffernan' },
    // Add more credits as needed
];

const Credits = () => {
    useEffect(() => {
        var audio = new Audio(pingsfx);
        audio.volume =.5

        credits.forEach((credit, index) => {
            setTimeout(() => {
                audio.play();
            }, index * 500); // Match this delay with the animation delay
        });
    }, []);

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
