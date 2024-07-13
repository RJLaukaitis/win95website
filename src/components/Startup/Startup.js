import React, { useEffect, useRef } from 'react';
import './Startup.css';

const Startup = () => {
  const infoRef = useRef(null);

  useEffect(() => {
    const mainSystemInfo = [
      "System information",
      "Uptime: 183960 hours",
      "CPU Usage: 23%",
      "Memory Usage: 23%",
      "Network: Connected to internet",
      "Temperature: 42°C",
      "GPU Usage: 15%",
      "System Load: 1.2",
      "Kernel Version: 5.4.0-42-generic",
    ];

    const additionalMessages = [
      "Spinning drives...",
      "Turning on computer...",
      "Initializing network...",
      "Bootstrapping system...",
    ];

    const moreMessages = [
      "Cleaning up...",
      "Starting services...",
      "Entering Desktop",
    ];

    const displayInfo = (messages, delay) => {
      return new Promise(resolve => {
        messages.forEach((info, index) => {
          setTimeout(() => {
            if (infoRef.current) {
              infoRef.current.innerText += `${info}\n`;
            }
            if (index === messages.length - 1) {
              resolve();
            }
          }, index * delay);
        });
      });
    };

    const displayMessages = async () => {
      await displayInfo(mainSystemInfo, 200);
      await displayInfo(moreMessages, 1000);
      await displayInfo(additionalMessages, 800);
    };

    displayMessages();

  }, []);

  return (
    <div className="splash-screen">
      <pre className="header">
        <p>Laukaitis OS [Version 2.5.4]</p>
        <p>(C) Laukaitis Corporation. All rights reserved.</p>
      </pre>
      <pre className="logo">
        {`
       __                __         _ __  _      ____  _____
      / /   ____ ___  __/ /______ _(_) /_(_)____/ __ \\/ ___/
     / /   / __ \`/ / / / //_/ __ \`/ / __/ / ___/ / / /\\__ \\ 
    / /___/ /_/ / /_/ / ,  / /_/ / / /_/ (__  ) /_/ /___/ / 
    \\____/\\__,_/\\__,_/_/|_|\\__,_/_/\\__/_/____/\\____//____/  
                                                             
        `}
      </pre>
      <div className="system-info">
        <pre ref={infoRef} className="tasks"></pre>
      </div>
    </div>
  );
};

export default Startup;
