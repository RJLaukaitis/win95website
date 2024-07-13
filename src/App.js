import React, { useState } from 'react';
import Desktop from './components/Desktop/Desktop';
import Taskbar from './components/TaskBar/Taskbar';
import Shutdown from '../src/components/Shutdown/Shutdown';

function App() {
  const [isShutdown, setIsShutdown] = useState(false);

  const handleShutdown = () => {
    setIsShutdown(true);
  };

  return (
    <div className="App">
      {isShutdown ? (
        <Shutdown />
      ) : (
        <>
          <Desktop />
          <Taskbar onShutdown={handleShutdown} />
        </>
      )}
    </div>
  );
}

export default App;
