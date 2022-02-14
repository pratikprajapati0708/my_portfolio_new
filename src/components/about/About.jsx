import React from 'react';
import "./about.css"

 const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg">
               <div className="a-card">
                 <img 
                 src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                 alt="" 
                 className="a-img" 
                 />
                 </div>
               </div>
               
           </div>
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">

               </p>
               <p className="a-desc">
                    Experienced Software Developer with 1+ years of experience adept in bringing
                    forth expertise in design, installation, and maintenance of software systems.
                    Able to effectively self-manage during projects, as well as collaborate as
                    part of a productive team. Proficient in various platforms and languages. 
                    Experienced with the latest development tools and procedures.
               </p>
           </div>
        </div>
    )
}
export default About