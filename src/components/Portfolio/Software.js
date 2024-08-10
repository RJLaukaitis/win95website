import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Software.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import alchemyHome from "../../images/AlchemHome.png"
import alchemyDemo from "../../Videos/AlchemyDemo.mp4";
import draft from "../../images/websiteDraft.png";
import final from "../../images/final.png";


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
                <h2>April 2024 - August 2024</h2>
                    <div className="paragraph">
                        <p>
                        I always wanted to create my own personal portfolio website and I became inspired after seeing Henry Heffernan's 2022 showcase, which can be found <a href= "https://henryheffernan.com/">here</a>. I decided to follow his same framework and started working on the windowsOS portion in April of 2024. This was my first time delving into JavaScript and CSS so it took some time getting adjusted however I picked it up pretty quick and was able to create the main desktop page in a single sitting. Once I had this in place I started working on the portfolio pages and chipped away at it during the rest of my school year.
                        </p>
                        </div>
                        <div className="Media1">
                        <img src = {draft} alt="" />
                        <img src = {final}></img>
                        </div>
                        <div className="webCaption">
                            <p>
                                Figure 1: Comparison between the first and final iteration of the office space.
                            </p>
                        </div>
                        <div className="paragraph">
                        <p>
                            The 3d portion of the website was created using THREEjs and blender. Once i had the office scene laid out, I baked the lighting from blender into objects' textures giving everything a realistic and polished look. Having never worked with THREEjs before it posed quite a challenge to initially begin, however after a couple weeks of trial and error, I was able to get my model displaying properly and could start work on adding the user interface and landing page.
                        </p>
                        <p>
                            Once the summer rolled around I could work much more often and push through the late stages of development with bug fixes and small tweaks. I'm so proud with how the end result turned out and working on this project really grew my skills as a programmer and how I approach a challenge.
                        </p>
                        </div>
            </div>

            <hr class="solid"></hr> 
            <div className="Alchemy">
                <h1>alchemy </h1>
                <h2>June 2024</h2>
                        <p>
                        Alchemy is a highly customizable solana based cryptocurrency trading bot designed to provide users with a competitive advantage in trading the latest coins and tokens. The bot holds an array of powerful modules, including advanced Twitter and Telegram monitoring for coin releases and drops. There's also a sophisticated PumpdotFun screener, utilizing a proprietary  algorithm to rate and score coins based on multiple metrics.   
                        </p>
                        <div className="alchemyHome">
                        <div className="mediaContainer">
                        <img src = {alchemyHome} alt="Alchemy home" className="mediaImage"/>
                        <video controls muted loop className="mediaVideo">
                            <source src={alchemyDemo} type="video/mp4" />
                        </video>

                        </div>
                        </div>
                        <div className="captions">
                            <p>
                            <span>Figure 2: Alchemy home screen.  </span>
                            <span>Figure 3: Demo of the Telegram module</span>        
                            </p>
                        </div>
                        <p>
                        I built Alchemy in June of 2024, after solana memecoins took over my twitter feed. Noticing the lucrative opportunity some of these coins could offer, I started planning out what tools would be most useful for ending up on the winning side of trades. It took a lot of research and experimentation with different API's and services, however, I was able to develop a system that could reliably monitor and evaluate coins in real time. The result was a robust and reliable trading bot that allows users to capitalize on emerging trends in the cryptocurrency market.
                        </p>
                        <p>
                        The github repo is not public as of now due to there being sensitive data ( API keys, login info, etc.), however if you wish to see parts of the source code please feel free to contact me.
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
                    T-recs is a web based app to help Lehigh faculty and admins track student integrity violations across departments. Faculty are able to securely log into the platform through their Lehigh email accounts, and submit a report form about incidents. I worked on this app with a few other students from the University, our professor reached out to students offering summer research opportunities and I jumped in as soon as I could. Our team of five began work in June and split-up depending on what we had the most experience in. I started working on the frontend components, and as of writing, the project is on-going.
                </p>
        
                </div>
            <hr class="solid"></hr> 

        </div>
    );
};


export default Software;
