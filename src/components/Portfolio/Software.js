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
                        I built Alchemy in June of 2024, after solana memecoins started taking over my twitter feed. Noticing the lucrative opportunity some of these coins could offer, I started planning out what tools would be most useful for being on the winning side of trades. It took a lot of research and experimentation with different API's and services, however, I was able to develop a system that could reliably monitor and evaluate coins in real time. The result was a robust and reliable trading bot that allows users to capitalize on emerging trends in the cryptocurrency market.
                        </p>
                        <p>
                        The github repo is not public to avoid plagiarism, however if you wish to see the source code please feel free to contact me.
                        </p>
                        <div className="features">
                            <h3> Features:</h3>
                            <div className="bulletedList">
                            <p>
                                • Multi user and channel monitoring for Telegram and Twitter
                            </p>
                            <p>
                                • Advanced algorithm to screen newly created coins and alert once one passes criteria
                            </p>
                            <p>
                                • Auto buy once a coin is detected on monitored channels
                            </p>
                            <p>
                                • Auto sell  a percentage of coin holdings after a set time limit
                            </p>
                        </div>
                </div>
                <hr class="solid"></hr> 
            </div>

            <div className="T-Recs">
            <h1>T-Recs</h1>
                <h2>June 2024 - August 2024</h2>
                <p>
                    T-recs is a web based app to help Lehigh faculty and admins track student integrity violations across departments. Faculty are able to securely log into the platform through their Lehigh email accounts, and submit a report form about the incident. I worked on this app with a few other students from the University, our professor, Mark Erle reached out to students for research opportunities and I jumped in as soon as i could. Our team of five splt up to work in the sections we had the most experience in. I developed most of the backend parts and created the methods for sending and receiving report objects to the postgres database.
                </p>
        
                </div>
            <hr class="solid"></hr> 

        </div>
    );
};


export default Software;