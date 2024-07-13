import React from 'react';
import './StartMenu.css';
import ShutDownIcon from "../../images/ShutDownIcon.png";

function StartMenu() {

    const handleShutdown = () => {
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
        </div>
    );
}

export default StartMenu;