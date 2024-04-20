import react from 'react';
import './StartMenu.css';
import  Icon from '../Icons/Icon.js'
import ShutDownIcon from "../../images/ShutDownIcon.png";

function StartMenu(){
    const handleShutdown = () => {
        /*Add shutdown logic */
        console.log('Shutting down');
    };

return (
    <div className="start-menu">
        <div className="Laukaitis-text">
            Laukaitis
        </div>
        <div className="OS-text">
            OS
        </div>

        <div className='shutdownIcon'>
            <img src={ShutDownIcon} alt='Shutdown'/>
            <span className='Shutdown-text'>
            Shutdown
        </span>
        </div>
        {/*Add other menu items here */}
    </div>
);
}

export default StartMenu;