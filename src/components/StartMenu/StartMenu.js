import React from 'react';
import './StartMenu.css';
import '98.css';
import ShutDownIcon from "../../images/ShutDownIcon.png";
import Wrapper from '../PortfolioNavigator/Wrapper';


const StartMenu = ({ onShutdown }) => {

    return (
        <div className="start-menu">
            <div className="Laukaitis-text">
                Laukaitis
            </div>
            <div className="OS-text">
                OS
            </div>
            <div className="shutdownIcon" onClick={onShutdown}>
                <img src={ShutDownIcon} alt='Shutdown'/>
                <span className='Shutdown-text'>
                    Shutdown
                </span>
            </div>
        </div>
    );
}

export default StartMenu;