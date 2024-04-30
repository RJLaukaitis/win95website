import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Blender.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import Gargantua from "../../Videos/Gargantua.mp4";
import Earth1 from "../../images/Earth3.png"
import Earth2 from "../../images/Earth4.png"

const Blender = () => {

    return (
        <div className="page-layout">
            <VerticalMenu/>
            <div className="Blender-content">
                <div className="Blender">
                    <h1>Renders</h1>
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
                            Figure 1: Gargantua zoomed in. Rendered at 1920x1080 with 128 samples.
                        </p>
                    

                    <p>
                        Another scene I worked on was a photo realistic earth as seen from Low-Earth-Orbit. This project utilized official Earth surface scans, heightmaps, and cloud maps provided by Nasa. The surface is achieved by using a texture coordinate node with several layers of masking to effectively separate the ocean from the land. This allows me to control the specularity and roughness to ensure the land appears rougher and the ocean has some shine to it. To produce the atmosphere, the surface sphere was duplicated with a new material applied to it. The new material uses several Vector and Math nodes to dissipate the blueish tint and "raise" it above the surface.
                    </p>
                    <div className="Earth-images">
                    <img src = {Earth1} alt="" />
                    <img src = {Earth2} alt="" />
                    </div>
                    <p className="earth-caption">
                        Figures 2, 3: Earth closeups rendered at 1920x1080 with 64 samples.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blender
