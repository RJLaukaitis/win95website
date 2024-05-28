import React from "react";

function Icon({ label, imgSrc, onClick}) {
    return (
        <div className="icon" onClick={onClick}>
            <img src={imgSrc} alt={label} style={{width: '48px', height: '48px'}} />
            <p className="icon-label">{label}</p>
        </div>
    );
}

export default Icon;