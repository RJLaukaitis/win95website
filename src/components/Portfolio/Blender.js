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
            <VerticalMenu/>
            <div className="Blender-content">
                <div className="Blender">
                    <h1>Renders</h1>
                </div>
                <hr className="solid"></hr>
                <div className="blenderHeader">
                    <h1>Blender</h1>
                </div>
                <div className="Text">
                    <p>
                        Blender has quickly become one of my favorite pieces of software to use and experiment with. It is one of the best rendering tools available for beginners, allowing me to exercise my creative side when I feel inspired. I currently love creating space-based renders. With Interstellar being one of my favorite movies, I recreated the Gargantua black hole as seen in the film. I also created a photorealistic Earth that is customizable for different cloud coverage, sunlight, and other variables. In addition to my space renders, I have been experimenting with different particle effects, trying to emulate the flying atomic particles and molecules as seen in Oppenheimer. This has allowed me to push the boundaries of my skills and learn a whole new side of the software with efficient particle simulations and lighting setups.  
                    </p>
                    <p>
                        My goal is to create an engaging short film putting all of these renders together into one cohesive and captivating showcase.
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
