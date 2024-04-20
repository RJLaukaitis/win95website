import React, { useState } from "react";
import './Desktop.css';
import '../Icons/Icon.js';
import Icon from "../Icons/Icon.js";
import PortfolioIcon from "../../images/DocumentIcon.png";
import SolitaireIcon from "../../images/solitaireIcon.png";

function Desktop() {
    const [isSolitaireOpen, setIsSolitaireOpen] = useState(false);
    return (
        <div className="desktop">
            <Icon label="Portfolio" imgSrc={PortfolioIcon}/>
            <Icon label="Solitaire" imgSrc={SolitaireIcon} onClick={() => setIsSolitaireOpen(true)}/>

            {isSolitaireOpen && (
                <div className="game-modal">
                    <iframe src="Solitaire/index.html" title="Solitaire Game" style= {{width: '100%', height: '100%'}}></iframe>
                    <button onClick={() => setIsSolitaireOpen(false)}>Close Game</button>
                    </div>
            )}
            {/* Add dragging functionality*/}
        </div>
    );
}

export default Desktop;