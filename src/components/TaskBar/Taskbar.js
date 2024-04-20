
import React, {useState, useEffect} from "react";
import './Taskbar.css';
import '../StartMenu/StartMenu'
import '../StartMenu/StartMenu.css'
import WindowsLogo from '../../images/Windows_logo.png';
import StartMenu from "../StartMenu/StartMenu";

function Taskbar() {
    // State to hold the current time
    const [currentTime, setCurrentTime] = useState(new Date());
  
    // Effect to update the time every second
    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(timerId);
    }, []);
  
    // Format the time as a string
    const timeString = currentTime.toLocaleTimeString();

    const [startMenuVisible, setStartMenuVisible] = useState(false);

    const toggleStartMenu = () => {
      setStartMenuVisible(!startMenuVisible);
    };
  
    return (
      <div className="taskbar">
        <button className="start-button button">
          <img src={WindowsLogo} alt="Start" className="start-logo" />
          <span>Start</span>
        </button>
        <div className="system-tray">
          <div className="clock">
            {timeString}
          </div>
        </div>
        {startMenuVisible && <StartMenu />}
      </div>
    );
  }
  
  export default Taskbar;