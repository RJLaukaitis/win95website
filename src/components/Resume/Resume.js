import React from 'react';
import TransferGif from "../../images/Resume.gif"
import Resumepdf from "./RJLResume.pdf";
import "./Resume.css";


const Resume = () =>{
    return(
        <div className="ResumeDownload">
        <div className='image'>
            <img className="gif" src={TransferGif} alt="Download Resume GIF"/>
        </div>
        <div className="text-container">
            <div className="Download-text">
                <h3 className="desc">
                    Want to see my resume?
                </h3>
            </div>
            <div className='dtext'>
                <a href={Resumepdf} download="RJLResumeSP22">Click here to download!</a>
            </div>
        </div>
    </div>
)
}
export default Resume