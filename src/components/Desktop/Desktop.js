import React, { useState } from 'react';
import './Desktop.css'; // Make sure your styles don't conflict with 98.css
import Icon from "../Icons/Icon.js";
import PortfolioIcon from "../../images/DocumentIcon.png";
import SolitaireIcon from "../../images/solitaireIcon.png";
import DraggableWindow from '../DraggableWindow/DraggableWindow.js';
import HelpIcon from "../../images/HelpIcon.png";
import Draggable from 'react-draggable';

function Desktop() {
    const [isSolitaireOpen, setIsSolitaireOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="desktop">
            <Icon label="Portfolio" imgSrc={PortfolioIcon} />
            <Icon label ="Help" imgSrc={HelpIcon}/>


            <Icon label="Solitaire" imgSrc={SolitaireIcon} onClick={() => setIsSolitaireOpen(true)} />
            {isSolitaireOpen && (
            <Draggable handle=".title-bar"
                onStart={()=> setIsDragging(true)}
                onStop={()=> setIsDragging(false)}
            >
                <div className={`window ${isDragging ? 'dragging' : ''}`} style={{width: '51vw'}}>
                    <div className="title-bar">
                        <div className="title-bar-text">Solitaire</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize" />
                            <button aria-label="Maximize" />
                            <button aria-label="Close" onClick={() => setIsSolitaireOpen(false)} />
                        </div>
                    </div>
                    <div className="window-body">
                        <iframe src="Solitaire/index.html" title="Solitaire" style={{ width: '50vw', height: '50vh',border:'none' }}></iframe>
                    </div>
                </div>
            </Draggable>                
            )}
            {/* Add dragging functionality */}
        </div>
    );
}

export default Desktop;