import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Blender.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import Gargantua from "../../Videos/Gargantua.mp4";

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
                        Blender has quickly become one of my favorite pieces of software to use and experiment with. It is one of the best rendering tools available for beginners, and it allows me to exercise my creative side when I feel inspired.
                    </p>
                    <p>
                        With one of my favorite movies being Interstellar by Christopher Nolan, I've recently been interested in creating space-themed renders involving planets, blackholes, and nebulae. The video below is my attempt at creating the Gargantua blackhole from Interstellar. For this particular animation I had to watch and learn a few different tutorials in order to get the look and feel of the scene correct. The math calculations in the node graph for the gravity lensing effect are the byproduct of using the spherical and cartesian coordinates of the accretion disk's texture coordinates, and running those values through several multiply, add, divide, float curve, and Musgrave texture nodes. The infinite loop of the video was achieved in Adobe Premiere Pro by splicing the clip in the middle, playing the second half of the video first, then applying a cross dissolve effect on the splice.
                    </p>
                    <video className="video1" width="500" height="300" autoplay controls muted loop>
                        <source src={Gargantua} type="video/mp4"></source>
                    </video>
                    <p className="video1-caption">
                            Figure 1: Gargantua zoomed in. Rendered at 1920x1080 with 64 samples
                        </p>
                    

                    <p>
                        Another scene I worked on was a flyover of earth as seen from Low-Earth-Orbit (LEO). This project utilized
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blender
