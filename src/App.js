import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop/Desktop';
import Taskbar from './components/TaskBar/Taskbar';
import Shutdown from "../src/components/Shutdown/Shutdown";
import Startup from "../src/components/Startup/Startup";

function App() {
  const [isShutdown, setIsShutdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleShutdown = () => {
    setIsShutdown(true);
    setIsDesktop(false);
  };

  useEffect(() => {
    if (isShutdown) {
      const shutdownTimer = setTimeout(() => {
        setIsLoading(true);
        setIsShutdown(false);

        const loadingTimer = setTimeout(() => {
          setIsLoading(false);
          setIsDesktop(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(loadingTimer);
      }, 10000); // 10 seconds

      return () => clearTimeout(shutdownTimer);
    }
  }, [isShutdown]);

  return (
    <div className="App">
      {isShutdown && <Shutdown />}
      {isLoading && <Startup />}
      {isDesktop && (
        <>
          <Desktop />
          <Taskbar onShutdown={handleShutdown} />
        </>
      )}
    </div>
  );
}

export default App;
