import React, { useState, useEffect } from 'react';
import Navigator from '../PortfolioNavigator/Navigator.js';
import Icon from "../Icons/Icon.js";
import Draggable from 'react-draggable';
import pcNoise from "../../Audio/Ambience.mp3";
import typeNoise from "../../Audio/Typing.mp3";
import MouseUp from "../../Audio/MouseUp.mp3";
import MouseDown from "../../Audio/MouseDown.mp3";
import '98.css';
import './Desktop.css'; // Ensure styles do not conflict with 98.css
import 'react-resizable/css/styles.css'; // Import CSS for resizable component

import PortfolioIcon from "../../images/DocumentIcon.png";
import SolitaireIcon from "../../images/solitaireIcon.png";

function Desktop() {
    const [isSolitaireOpen, setIsSolitaireOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const playClickUPSound = () => {
            var mouseUpsound = new Audio(MouseUp);
            mouseUpsound.volume =0.15;
            mouseUpsound.play();
        };

        const playClickDOWNSound = () => {
            var MouseDownSound = new Audio(MouseDown);
            MouseDownSound.volume =0.15;
            MouseDownSound.play();
        };

        var typesound = new Audio(typeNoise);
        var startTime = 0;
        var duration = 0.2;
        
        const playTypingSound = () => {
            // Reset to start if startTime exceeds the audio duration
            if (startTime + (duration+2) > typesound.duration) {
                startTime = 0;
            }
        
            typesound.currentTime = startTime;
            typesound.volume = 0.1;
            typesound.play();
        
            // Stop after the specified duration
            setTimeout(() => {
                typesound.pause();
                typesound.currentTime = 0; // Reset to the start to avoid issues with pausing
                startTime++; // Increment startTime for next key press
            }, duration * 1000);
        };

        window.addEventListener('keypress', playTypingSound);

        // Play ambient sound
        const ambience = new Audio(pcNoise);
        ambience.loop = true;
        ambience.volume = 0.1;
        //ambience.play();

        window.addEventListener('mousedown', playClickDOWNSound);
        window.addEventListener('mouseup', playClickUPSound);

        return () => {
            window.removeEventListener('mousedown', playClickDOWNSound);
            window.removeEventListener('mouseup', playClickUPSound);
        };
    }, []);

    return (
        <div className="desktop">
            <Icon label="Portfolio" imgSrc={PortfolioIcon} onClick={() => setIsPortfolioOpen(true)} />
            {isPortfolioOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    defaultPosition={{x: 50, y: 25}}
                >       
                        <div className={`window ${isDragging ? 'dragging' : ''}`}>
                            <div className="title-bar">
                                <div className="title-bar-text">Portfolio</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize" />
                                    <button aria-label="Maximize" />
                                    <button aria-label="Close" onClick={() => setIsPortfolioOpen(false)} />
                                </div>
                            </div>
                            <div className="window-body">
                                <Navigator/>
                            </div>
                        </div>
                </Draggable>
            )}
            <Icon label="Solitaire" imgSrc={SolitaireIcon} onClick={() => setIsSolitaireOpen(true)} />
            {isSolitaireOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    defaultPosition={{x: 300, y: 100}}
                >
                        <div className={`window ${isDragging ? 'dragging' : ''}`}>
                            <div className="title-bar">
                                <div className="title-bar-text">Solitaire</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize" />
                                    <button aria-label="Maximize" />
                                    <button aria-label="Close" onClick={() => setIsSolitaireOpen(false)} />
                                </div>
                            </div>
                            <div className="window-body">
                                <iframe src="../../Solitaire/src/index.js" title="Solitaire" style={{ width: '50vw', height: '50vh', border: 'none' }}></iframe>
                            </div>
                        </div>
                </Draggable>
            )}
        </div>

    );
}

export default Desktop;

