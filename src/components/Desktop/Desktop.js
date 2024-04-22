import React, { useState } from 'react';
import Navigator from '../PortfolioNavigator/Navigator.js';
import Icon from "../Icons/Icon.js";
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import '98.css';
import './Desktop.css'; // Make sure your styles don't conflict with 98.css

import PortfolioIcon from "../../images/DocumentIcon.png";
import SolitaireIcon from "../../images/solitaireIcon.png";
import HelpIcon from "../../images/HelpIcon.png";

function Desktop() {
    const [isSolitaireOpen, setIsSolitaireOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

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

            <Icon label="Help" imgSrc={HelpIcon}/>
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
                            <iframe src="Solitaire/index.html" title="Solitaire"style={{ width: '50vw', height: '50vh', border: 'none' }}></iframe>
                        </div>
                    </div>
            </Draggable>                
            )}
        </div>
    );
}

export default Desktop;
