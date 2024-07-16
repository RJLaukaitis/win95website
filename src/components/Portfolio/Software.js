import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Software.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import alchemyHome from "../../images/AlchemHome.png"
import Gargantua from "../../Videos/Gargantua.mp4";


const Software = () => {
    return (
        <div className="Page-Content">
            <VerticalMenu/>
            <div className="softwareHeader">
                <h1>
                    Software
                </h1>
            </div>
            <div className="introduction">
                Here is a list of the software projects I've worked on.
            </div>

            <hr class="solid"></hr> 
            <div className="website">
                <h1>RonaldLaukaitis.com </h1>
                <h2>April-August 2024</h2>
                        <p>
                        I always wanted to create my own personal portfolio website and I became inspired after seeing Henry Heffernan's 2022 showcase. I decided to follow his same framework and started working on the windowsOS portion in April of 2024. This was my first time delving into JS and CSS so it took some time getting adjusted however I picked it up pretty quick and was able to create the desktop page in a single sitting. Once I had this framework in place I started working on the actual portfolio page and chipped away at it during the rest of my school year.
                        </p>
                        <p>
                            The 3d portion of the website was created using THREEjs and blender. Blender was very intuitive to model the office portion of the scene, it also allowed me to bake all the textures with the blender lighting so I wouldn't have to rely on the THREEjs lighting system. Using baked textures gave everything a realistic look which couldn't have been achieved elsewhere.
                        </p>
                
                        <p>
                        </p>
                <hr class="solid"></hr> 
            </div>

            <hr class="solid"></hr> 
            <div className="Alchemy">
                <h1>alchemy </h1>
                <h2>June 2024</h2>
                        <p>
                        Alchemy is a highly customizable solana based cryptocurrency trading bot designed to provide users with a competitive advantage in trading the latest coins and tokens. The bot holds an array of powerful modules, including advanced Twitter and Telegram monitoring for coin releases and drops. There's also a sophisticated PumpdotFun screener, utilizing a proprietary  algorithm to rate and score coins based on multiple metrics.   
                        </p>
                        <div className="alchemyHome">
                        <div className="Media">
                        <img src = {alchemyHome} alt="" />
                        <video className="video1" width="500" height="300" autoplay controls muted loop>
                        <source src={Gargantua} type="video/mp4"></source>
                        </video>

                        </div>
                        </div>
                        <div className="captions">
                            <p>
                            <span>Figure 1: Alchemy home screen.  </span>
                            <span>Figure 2: Demo of the Telegram module</span>        
                            </p>
                        </div>
                        <p>
                        I built Alchemy in June of 2024, after solana memecoins started taking over my twitter feed. Noticing the lucrative opportunity some of these coins could offer, I started planning out what tools would be most useful for ending up on the winning side of trades. It took a lot of research and experimentation with different API's and services, however, I was able to develop a system that could reliably monitor and evaluate coins in real time. The result was a robust and reliable trading bot that allows users to capitalize on emerging trends in the cryptocurrency market.
                        </p>
                        <p>
                        The github repo is not public to avoid my code being used elsewhere, however if you wish to see parts of source code please feel free to contact me.
                        </p>
                        <div className="features">
                            <h3> Features:</h3>
                            <div className="bulletedList">
                            <p>
                                • Multi channel and user monitoring for Telegram and Twitter
                            </p>
                            <p>
                                • Advanced algorithm to screen newly created coins and alert once one passes criteria
                            </p>
                            <p>
                                • Full RPC integration and customization
                            </p>
                            <p>
                            • Auto buy and sell once a coin is detected on monitored channels
                            </p>
                        </div>
                </div>
                <hr class="solid"></hr> 
            </div>

            <div className="T-Recs">
            <h1>T-Recs</h1>
                <h2>June 2024 - August 2024</h2>
                <p>
                    T-recs is a web based app to help Lehigh faculty and admins track student integrity violations across departments. Faculty are able to securely log into the platform through their Lehigh email accounts, and submit a report form about the incident. I worked on this app with a few other students from the University, our professor, Mark Erle reached out to students for summer research opportunities and I jumped in as soon as i could. Our team of five split-up to work in the sections we had the most experience in. I started working on the backend components, and as of writing, the project is on-going.
                </p>
        
                </div>
            <hr class="solid"></hr> 

        </div>
    );
};


export default Software;
