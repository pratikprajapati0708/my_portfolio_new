import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
    const [done, setdone] = useState(false)

    const formRef = useRef()
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            "service_0knij13",
             "template_oa7xph9",
              formRef.current, 
              "user_R8rvbD6Q25WdOtfgrwcqH"
            )
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss this project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +91 7979096268
                        </div>
                        <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        pratik.prajapati1@hotmail.com
                        </div>
                        <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Varthur, Bangalore,India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b>
                      Get in touch.Available for freelancing if the right project comes along
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Thank you! Form has been submitted..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact