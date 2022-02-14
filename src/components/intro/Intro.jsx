import React from 'react'
import "./intro.css";
import me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left" >
              <div className="i-left-wrapper">
                  <h2 className="i-intro">Hello, My name is</h2>
                  <h1 className="i-name">Pratik Prajapati</h1>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">Application Development Analyst</div>
                          <div className="i-title-item">UI Developer</div>
                          <div className="i-title-item">Content Editor</div>
                      </div>
                  </div>
                  <p className="i-desc">
                  I am both self-driven and self-motivated, and I am constantly experimenting with new technologies and techniques. 
                  I am very passionate about Web Development, and strive to better myself as a developer.
                  </p>
              </div>

            </div>
            <div className="i-right" >
                <div className="i-bg">
                <img src={me} alt="" className="i-img" />
                </div>
            </div>
        </div>
    )
}

export default Intro
