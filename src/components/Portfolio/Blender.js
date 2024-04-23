import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Blender.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';

const Blender = () => {

    return (
        <div className="page-layout">
            <VerticalMenu/>
            <div className="Blender-content">
                <div className="Blender">
                    <h1>Blender</h1>
                </div>
                <hr class = "solid"></hr>
                <div className="Text">
                    <p>
                        Blender has quickly become one of my favorite pieces of software to use and experiment with. The possibilities are truly endless and I'm always able to think of a cool concept and know i can make it within blender.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blender
