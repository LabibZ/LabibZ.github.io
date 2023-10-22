import React, { Component } from "react";
import { Icon } from "@iconify/react";
import unityIcon from "@iconify/icons-logos/unity";
import unrealIcon from '@iconify/icons-logos/unrealengine-icon';
import gameController from '@iconify/icons-ion/game-controller';
import '../scss/about.css';
import resume from "../resume.pdf";

class About extends Component {
  function($) {
    /*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
      e.preventDefault();
 
      var target = this.hash,
       $target = $(target);
 
       $('html, body').stop().animate({
          'scrollTop': $target.offset().top
       }, 800, 'swing', function () {
         window.location.hash = target;
       });
 
     });  
  }
  
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      // var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto bm-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={unityIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 3%" }}
                  />
                  <Icon
                    icon={gameController}
                    style={{ fontSize: "480%", margin: "9% 5% 0 4%" }}
                  />
                  <Icon
                    icon={unrealIcon}
                    style={{ fontSize: "450%", margin: "9% 5% 0 2%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet ml-3 mr-3"
                    style={{ 
                      height: "auto",
                      fontSize: "160%",
                      lineHeight: "200%"
                    }}
                  >
                    <span className="wave">{hello}Hi, I'm Labib!</span>
                    <br />
                    <br />
                    I'm a <b>game developer</b> and <b>software developer</b> currently on my last semester at the University of Toronto studying Math and Computer Science.
                    <br /><br /> When I'm not programming, I partake in Photography 📷, Muay Thai 👊, and Video Games 🎮. Currently, I'm playing
                    <b> Baldur's Gate 3</b>, <b>Age of Empires IV</b>, and <b>Counter Strike 2</b>. 
                    Feel free to reach out to talk more about anything, whether it be photography, video games, or your favourite show/anime!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row button-section">
            <div className="col-twelve">
              <a href="https://www.linkedin.com/in/labibmz/" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
              <a href={resume} download="resume" target="_blank" rel="noreferrer"title="Download CV" className="button button-primary">Download CV</a>
            </div>   		
          </div>
        </div>
      </section>
    );
  }
}

export default About;
