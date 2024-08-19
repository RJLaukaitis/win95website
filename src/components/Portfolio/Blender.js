import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Blender.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import Gargantua from "../../Videos/Gargantua.mp4";
import Earth1 from "../../images/Earth2.png";
import Particle1 from "../../Videos/RedBlue.mkv";
import Particle2 from "../../Videos/Sparks.mkv";

const Blender = () => {
    return (
        <div className="page-layout">
            <VerticalMenu showSubmenu={true}/>
            <div className="Blender-content">
                <div className="Blender">
                    <h1>Renders</h1>
                </div>
                <div className="introduction">
                Here are some of my 3D renders I've worked on.
            </div>
                <hr className="solid"></hr>
                <div className="Text">
                    <p>
                    Blender has quickly become one of my favorite creative tools, offering a great way for beginners to explore rendering. I’m particularly drawn to space-based scenes, inspired by Interstellar, I recreated the Gargantua black hole and created a photorealistic Earth with customizable settings like cloud coverage and sunlight. Recently, I’ve also been experimenting with particle effects, aiming to replicate the atomic visuals from Oppenheimer. Below are some examples of these renders.
                    </p>
                    <div className="flex-container">
                        <div className="media-item">
                            <video width="100%" height="auto" autoplay controls muted loop>
                                <source src={Gargantua} type="video/mp4"></source>
                            </video>
                            <p className="caption">Figure 1: Gargantua zoomed in. Rendered at 1920x1080 with 128 render samples.</p>
                        </div>
                        <div className="media-item">
                            <img src={Earth1} alt="Earth 1"/>
                            <p className="caption">Figure 2: Earth closeup. Rendered at 1920x1080 with 64 render samples.</p>
                        </div>
                        <div className="media-item">
                            <video width="100%" height="auto" autoplay controls muted loop>
                                <source src={Particle1} type="video/mp4"></source>
                            </video>
                            <p className="caption">Figure 3: Red & Blue particle simulation. Rendered at 1920x1080 with 64 samples and 25,000 particles.</p>
                        </div>
                        <div className="media-item">
                            <video width="100%" height="auto" autoplay controls muted loop>
                                <source src={Particle2} type="video/mp4"></source>
                            </video>
                            <p className="caption">Figure 4: Swirling sparks particle simulation. Rendered at 1920x1080 with 64 samples and 25,000 particles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blender;
