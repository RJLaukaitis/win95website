import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Software.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';

const Software = () => {
    return(
        <div className="Page-Content">
            <VerticalMenu/>
            <div className="SoftwareHeader">
                <h1>
                    Software
                </h1>
            </div>
            <div className="RonaldLaukaitis.com">
                RonaldLaukaitis.com
            </div>
        </div>

    );
};

export default Software;
