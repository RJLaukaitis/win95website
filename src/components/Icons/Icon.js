import React from "react";

function Icon({ label, imgSrc }) {
    return (
        <div className="icon">
            <img src="{imgSrc}" alt={label} style={{width: '32px', height: '32px'}} />
            <p>{label}</p>
        </div>
    );
}

export default Icon;