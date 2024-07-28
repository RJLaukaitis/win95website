import styles from './Shutdown.module.css';
import React, { useEffect } from 'react';
import errorSound from "../../Audio/Error.mp3";



const ShutdownPage = () => {
    useEffect(() => {
        const audio = new Audio(errorSound);
        audio.volume = .1;
        audio.play();
      }, []);


  return (
    <div className={styles.shutdownPage}>
      <h1>ERROR</h1>
      <p>
        A problem has been detected and the operating system has been shut down to prevent damage
        to your computer.
      </p>
      <p>
        The problem seems to be caused by the following: ERROR.ERROR.ERROR
      </p>
      <p>
        SYSTEM_THREAD_EXCEPTION_NOT_HANDLED
      </p>
      <p>Technical Information:</p>
      <p>
        *** STOP: 0x1000007e (0xffffffffc0000005, 0xfffff80002e55151, 0xfffff880009a99d8,
        0xfffff880009a9230)
      </p>
      <p>
        *** 0xfffff80002e55151 base at 0xfffff80002e0d000 DateStamp 0x4ce7951a C0D3: RMCR3l0ADRLY
      </p>
      <p>
        If this is the first time you've seen this stop error screen,
        restart your computer. If this screen appears again, follow these steps:
      </p>
      <ul>
        <li>Check to make sure any new hardware or software is properly installed.</li>
        <li>If this is a new installation, ask your hardware or software manufacturer
          for any OS updates you might need.</li>
        <li>If problems continue, disable or remove any newly installed hardware
          or software. Disable BIOS memory options such as caching or shadowing.</li>
        <li>If you need to use safe mode to remove or disable components, restart
          your computer, press F8 to select Advanced Startup Options, and then
          select Safe Mode.</li>
        <li>
          Press CTRL+ALT+DEL to restart your computer.
          You will lose unsaved information in any programs that are running.
        </li>
      </ul>
      <p>
        Rebooting in 10 seconds. <span className={styles.blink}>_</span>
      </p>
    </div>
  );
};

export default ShutdownPage;