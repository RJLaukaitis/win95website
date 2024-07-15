import React, { useEffect, useRef } from 'react';
import './Startup.css';

const Startup = () => {
  const infoRef = useRef(null);

  useEffect(() => {
    const messages = [
      "---System information---",
      "Uptime: 183960 hours",
      "CPU Usage: 23%",
      "Memory Usage: 23%",
      "Network: Connected to internet",
      "Temperature: 42°C",
      "GPU Usage: 15%",
      "System Load: 1.2",
      "Kernel Version: 5.4.0-42-generic",
      "Cleaning up...",
      "Starting services...",
      "Bootstrapping system...",
      "Initializing network...",
      "Cleaning up..."
    ];
    let isMounted = true;  // Add this to track the component mount status

    const displayMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, i < 9 ? 200 : 1000));
        if (isMounted && infoRef.current) {
          infoRef.current.innerHTML += `${messages[i]}<br/>`;
        }
      }
    };

    displayMessages();

    return () => {
      isMounted = false;  // Cleanup to prevent state updates if the component unmounts
    };
  }, []);

  return (
    <div className="splash-screen">
      <div className="header">
        <p>Laukaitis OS [Version 2.5.4]</p>
        <p>(C) Laukaitis Corporation. All rights reserved.</p>
      </div>
      <div className="logo">
        <div className="ascii-art">
          {`
       __                __         _ __  _      ____  _____
      / /   ____ ___  __/ /______ _(_) /_(_)____/ __ \\/ ___/
     / /   / __ \`/ / / / //_/ __ \`/ / __/ / ___/ / / /\\__ \\ 
    / /___/ /_/ / /_/ / ,  / /_/ / / /_/ (__  ) /_/ /___/ / 
    \\____/\\__,_/\\__,_/_/|_|\\__,_/_/\\__/_/____/\\____//____/  
                                                             
          `}
        </div>
      </div>
      <div className="system-info">
        <div ref={infoRef} className="tasks"></div>
      </div>
    </div>
  );
};

export default Startup;
