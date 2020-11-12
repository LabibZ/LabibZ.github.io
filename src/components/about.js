import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import './css/about.css';

class About extends Component {
    render() {
        return(
            <div className="about">
                <h1>Labib Zaman</h1>
                <p>University of Toronto Student & Developer</p>
                <p>Let's get in touch!</p>
                <div className="middle">
                    <Link to="/projects" className="btn">View Projects</Link>
                    <a href="https://drive.google.com/file/d/1x2LV7mBGPoleegEHXfLhV7mAVPt84qVf/view?usp=sharing" target="_blank" className="btn">View Resume</a>
                </div>
                <div className="icons">
                    <SocialIcon url="https://www.linkedin.com/in/labibmz/" target="_blank" network="linkedin" fgColor="white"/>
                    <SocialIcon url="https://github.com/LabibZ" target="_blank" network="github" fgColor="white"/>
                    <SocialIcon url="mailto:labibmzaman@gmail.com" target="_blank" network="email" fgColor="white"/>
                </div>
            </div>
        )
    }
}

export default About;