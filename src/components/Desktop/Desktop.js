import React, { useState, useEffect } from 'react';
import Navigator from '../PortfolioNavigator/Navigator.js';
import Icon from "../Icons/Icon.js";
import Card from "../BusinessCard/BusinessCard.js"
import Credits from "../Credits/Credits.js"
import Draggable from 'react-draggable';
import pcNoise from "../../Audio/Ambience.mp3";
import typeNoise from "../../Audio/Typing.mp3";
import MouseUp from "../../Audio/mouse_up.mp3";
import MouseDown from "../../Audio/mouse_down.mp3";
import './Desktop.css'; // Ensure styles do not conflict with 98.css
import 'react-resizable/css/styles.css'; // Import CSS for resizable component
import '98.css';

import PortfolioIcon from "../../images/DocumentIcon.png";
import creditsIcon from "../../images/credits.png"
import SolitaireIcon from "../../images/solitaireIcon.png";
import mineIcon from "../../images/minesweeper.png";
import cardIcon from "../../images/mailbox.png"
import { wait } from '@testing-library/user-event/dist/utils/index.js';

function Desktop() {
    const [isSolitaireOpen, setIsSolitaireOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isMineOpen, setIsMineOpen] = useState(false);
    const [isCreditsOpen, setIsCreditsOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const portfolioBounds = {
        left: 5,
        top: 5,
        right: window.innerWidth -1090, 
        bottom: window.innerHeight - 800, 
    };

    const solitaireBounds = {
        left: 5,
        top: 5,
        right: window.innerWidth - 1130, 
        bottom: window.innerHeight - 810, 
    };

    const minesweeperBounds = {
        left: 5,
        top: 5,
        right: window.innerWidth - 400,
        bottom: window.innerHeight - 500, 
    };

    const cardBounds = {
        left: 5,
        top: 5,
        right: window.innerWidth - 900, 
        bottom: window.innerHeight - 800,
    };

    const creditsBounds = {
        left: 5,
        top: 5,
        right: window.innerWidth - 900,
        bottom: window.innerHeight - 800,

    }

    useEffect(() => {
        const playClickUPSound = () => {
            var mouseUpsound = new Audio(MouseUp);
            mouseUpsound.volume =0.15;
            wait(1);
            mouseUpsound.play();
        };

        const playClickDOWNSound = () => {
            var MouseDownSound = new Audio(MouseDown);
            MouseDownSound.volume =0.15;
            MouseDownSound.play();
        };

        const typesound = new Audio(typeNoise);
        let typingTimeout;
        const duration = 0.2; // duration of the typing sound in seconds
        let startTime = 0;

        const playTypingSound = () => {
            if (startTime + (duration + 1) > typesound.duration) {
                startTime = 0;
            }
            typesound.currentTime = startTime;
            typesound.volume=0.1;
            typesound.play();

            clearTimeout(typingTimeout); // Clear any existing timeout
            typingTimeout = setTimeout(() => {
                typesound.pause();
                typesound.currentTime = 0;
                startTime++;
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

    const bounds = {
        left: 0,
        top: 0,
        right: 200, // Adjust as needed based on the window size
        bottom:30, // Adjust as needed based on the window size
    };

    return (
        <div className="desktop">
            <Icon label="Portfolio" imgSrc={PortfolioIcon} onClick={() => setIsPortfolioOpen(true)} />
            {isPortfolioOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    bounds={portfolioBounds}
                    defaultPosition={{x: 100, y: 10}}
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
                    bounds={solitaireBounds}
                    defaultPosition={{x: 50, y: 25}}
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
                                <iframe src={`${process.env.PUBLIC_URL}/Solitaire/index.html`} title="Solitaire" style={{ width: '90vw', height: '85vh', border: 'none' }}></iframe>
                            </div>
                        </div>
                </Draggable>
            )}
        <Icon label="Mines" imgSrc={mineIcon} onClick={() => setIsMineOpen(true)} />
            {isMineOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    bounds={minesweeperBounds}
                    defaultPosition={{x: 500, y: 35}}
                >
                        <div className={`window ${isDragging ? 'dragging' : ''}`}>
                            <div className="title-bar">
                                <div className="title-bar-text">Minesweeper</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize" />
                                    <button aria-label="Maximize" />
                                    <button aria-label="Close" onClick={() => setIsMineOpen(false)} />
                                </div>
                            </div>
                            <div className="window-body">
                                <iframe src={`${process.env.PUBLIC_URL}/minesweeper/index.html`} title="Minesweeper" style={{ width: '30vw', height: '50vh', border: 'none' }}></iframe>
                            </div>
                        </div>
                </Draggable>
            )}
        <Icon label="Card" imgSrc={cardIcon} onClick={() => setIsCardOpen(true)} />
            {isCardOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    bounds={cardBounds}
                    defaultPosition={{x: 220, y: 10}}
                >       
                        <div className={`window ${isDragging ? 'dragging' : ''}`}>
                            <div className="title-bar">
                                <div className="title-bar-text">Card</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize" />
                                    <button aria-label="Maximize" />
                                    <button aria-label="Close" onClick={() => setIsCardOpen(false)} />
                                </div>
                            </div>
                            <div className="window-body">
                                <Card/>
                            </div>
                        </div>
                </Draggable>
            )}
        <Icon label="Credits" imgSrc={creditsIcon} onClick={() => setIsCreditsOpen(true)} />
            {isCreditsOpen && (
                <Draggable handle=".title-bar"
                    onStart={()=> setIsDragging(true)}
                    onStop={()=> setIsDragging(false)}
                    bounds={creditsBounds}

                    defaultPosition={{x: 200, y: 10}}
                >       
                        <div className={`window ${isDragging ? 'dragging' : ''}`}>
                            <div className="title-bar">
                                <div className="title-bar-text">Credits</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize" />
                                    <button aria-label="Maximize" />
                                    <button aria-label="Close" onClick={() => setIsCreditsOpen(false)} />
                                </div>
                            </div>
                            <div className="window-body">
                            <Credits/>
                            </div>
                        </div>
                </Draggable>
            )}
        </div>

    );
}

export default Desktop;

