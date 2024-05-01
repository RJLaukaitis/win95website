import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Projects.css';
import VerticalMenu from '../VerticalMenu/verticalmenu';
import CategoryBox from '../CategoryBox/CategoryBox';
import softwareGif from '../../images/Softwaregif.gif'
import blenderGif from '../../images/Blender.gif';
import loadingGif from '../../images/loading.gif';

const Projects = () => {
    const navigate = useNavigate();
    const categories = [
        { name: "Software Projects",icon:softwareGif, path: "/software" },
        { name: "Renders",icon:blenderGif, path: "/blender" },
        { name: "Unreal Engine 5", icon:loadingGif, path: "/unrealengine" }
    ];

    const handleCategoryClick = (path) => {
        navigate(path);
    };

    return (
        <div className="page-layout">
            <VerticalMenu/>
            <div className="Projects-content">
            <div className="Projects">
            <h1>Projects</h1>
            </div>
            <div className="introduction">
                <p>
                    Here you can find various projects I've worked on, categorized by type, for ease of browsing. Click on any category that interests you to find detailed information and specifics!
                </p>
                <hr class= "solid"></hr>
            </div>
            <div className="category-container">
                {categories.map((category) => (
                <CategoryBox
                key={category.name}
                category={category}
                onClick={() => handleCategoryClick(category.path)}
             />
                ))}
            
            </div>
            </div>
            </div>
    );
};

export default Projects;