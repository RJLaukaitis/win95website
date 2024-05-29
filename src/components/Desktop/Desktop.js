import React, { useState, useEffect } from 'react';
import Navigator from '../PortfolioNavigator/Navigator.js';
import Icon from "../Icons/Icon.js";
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import pcNoise from "../../Audio/Ambience.mp3";
import clickNoise from "../../Audio/MouseClick.wav";
import '98.css';
import './Desktop.css'; // Ensure styles do not conflict with 98.css
import 'react-resizable/css/styles.css'; // Import CSS for resizable component

import PortfolioIcon from "../../images/DocumentIcon.png";
import SolitaireIcon from "../../images/solitaireIcon.png";

function Desktop() {
    const [isSolitaireOpen, setIsSolitaireOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const playClickSound = () => {
            var clickSound = new Audio(clickNoise);
            clickSound.volume =0.15;
            clickSound.play();
        };

        // Play ambient sound
        const ambience = new Audio(pcNoise);
        ambience.loop = true;
        ambience.volume = 0.1;
        //ambience.play();

        window.addEventListener('mousedown', playClickSound);

        return () => {
            window.removeEventListener('mousedown', playClickSound);
        };
    }, []);

    return (
        <div className="desktop">
            <Icon label="Portfolio" imgSrc={PortfolioIcon} onClick={() => setIsPortfolioOpen(true)} />
            {isPortfolioOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    defaultPosition={{x: 300, y: 100}}
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

