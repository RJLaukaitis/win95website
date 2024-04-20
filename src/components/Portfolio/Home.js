import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleContactClick= () => navigate('/contact');

    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-name">Ronald Laukaitis</h1>
                <h2 className="home-title"> rɒn.əld laʊ.kai.tɪs</h2>
            </header>
            <nav className="home-nav">
                {['about', 'experience', 'projects', 'contact'].map((item)=> (
                    <Link key={item} to={`/${item}`} className="nav-link">{item.toUpperCase()}</Link>
                ))}
            </nav>
            <button className="for-hire-button" onClick={handleContactClick}>
                Hire Me
            </button>
        </div>
    );
};

export default Home;