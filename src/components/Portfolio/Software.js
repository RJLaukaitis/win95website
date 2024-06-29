import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Software.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';

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
                <h1>Alchemy </h1>
                <h2>June 2024</h2>
                <p>
                Alchemy is a highly customizable solana based cryptocurrency trading bot designed to provide users with a competitive advantage in trading the latest coins and tokens. The bot holds an array of powerful modules, including advanced Twitter and Telegram monitoring for coin releases and drops. Additionally, Alchemy features a sophisticated PumpdotFun screener, utilizing an algorithm to rate and score coins based on multiple metrics. With its comprehensive suite of tools, Alchemy provides traders with the best chance to buy into fresh coins at low market-caps and profit.

                I built Alchemy in June of 2024, after the surge of solana memecoins.
                </p>
            </div>
            <div className="Chickfila">
            <h1>Chick-Fil-A</h1>
                <h2>Team Member, December 2019 - April 2022</h2>
                <p>
                • Gained valuable customer service experience serving fast paced shifts with 30 team members.<br></br>
                • Worked and managed the register, walked out orders to customers, made drinks and desserts.
                <br></br>
                • Effectively diffused difficult conversations surrounding customer complaints and made decisions to solve and maintain customer          satisfaction.
                <br></br>
                </p>
                </div>
        </div>
    );
};


export default Software;
