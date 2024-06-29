import React, { useState } from "react";
import './Contact.css';
import VerticalMenu from "../VerticalMenu/verticalmenu";
import emailjs from 'emailjs-com';
import Resume from "../Resume/Resume.js"
import sentsound from "../../Audio/sentsound.mp3";

const Contact = () => {
    // State hooks to keep track of input values and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [emailSent, setEmailSent] = useState(false);

    // Update form data as the user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    


    var sentAudio = new Audio(sentsound);
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_p87humi', 'template_9ohnrxw', event.target, 'kEfKQoxB0-m0FkKJp')
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            setFormData({name: '', email: '', company: '', message: ''}); // Clear form
            setEmailSent(true); // Indicate email was sent successfully
            sentAudio.play();
            
        }, (error) => {
            console.log('Failed to send email.', error.text);
            setEmailSent(false);
        });
    };

    return (
        <div className="contact-container">
            <VerticalMenu/>
            <div className="contact-content">
                <h1 className="ContactHeader">
                    Contact
                </h1>
                <p className="introduction">
                Please feel free to reach out using the form below - All inquiries are forwarded to my personal email address. You can also use my personal email address below if you'd like to send it through a web/desktop email client.
                </p>
                <div className="PersonalEmail">
                Email Address: <span className="EmailLink">Rjlaukaitis@gmail.com</span>
                </div>
                <hr className="solid"></hr>
                {emailSent && <div className="success-message">Message Sent!</div>}
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name"><span className="required-asterisk">*</span> Your name:</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email"><span className="required-asterisk">*</span>  Email:</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="company">Company (optional):</label>
                    <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} />

                    <label htmlFor="message"><span className="required-asterisk">*</span> Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

                    <button type="submit" className="send-message-button">Send</button>
                </form>
                <div className="resume">
                <Resume/>

                </div>
            </div>

        </div>
    );
};

export default Contact;
