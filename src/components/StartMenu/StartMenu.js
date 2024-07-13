import React from 'react';
import './StartMenu.css';
import ShutDownIcon from "../../images/ShutDownIcon.png";
import { Navigate, useNavigate } from 'react-router-dom';

function StartMenu() {
    const navigate = useNavigate();

    const handleShutdown = () => {
        navigate('/shutdown')
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
