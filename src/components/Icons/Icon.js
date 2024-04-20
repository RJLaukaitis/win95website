import React from "react";

function Icon({ label, imgSrc, onClick}) {
    return (
        <div className="icon" onClick={onClick}>
            <img src={imgSrc} alt={label} style={{width: '32px', height: '32px'}} />
            <p className="icon-label">{label}</p>
        </div>
    );
}

export default Icon;