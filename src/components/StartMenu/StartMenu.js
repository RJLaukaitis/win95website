import React from 'react';
import './StartMenu.css';
import Icon from '../Icons/Icon.js';
import ShutDownIcon from "../../images/ShutDownIcon.png";
import errorSound from "../../Audio/Error.mp3"; // Adjust the path as necessary

function StartMenu() {
    const error = new Audio(errorSound);

    const handleShutdown = () => {
        error.play();
        // Add additional shutdown logic here
    };

    return (
        <div className="start-menu">
            <div className="Laukaitis-text">
                Laukaitis
            </div>
            <div className="OS-text">
                OS
            </div>
            <div className="shutdownIcon" onClick={handleShutdown}>
                <img src={ShutDownIcon} alt='Shutdown'/>
                <span className='Shutdown-text'>
                    Shutdown
                </span>
            </div>
            {/* Add other menu items here */}
        </div>
    );
}

export default StartMenu;
