
import React, {useState, useEffect} from "react";
import './Taskbar.css';
import WindowsLogo from '../../images/Windows_logo.png';

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
      </div>
    );
  }
  
  export default Taskbar;