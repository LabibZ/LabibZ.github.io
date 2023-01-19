import React, { Component } from "react";
import { Icon } from "@iconify/react";
import unityIcon from "@iconify/icons-logos/unity";
import unrealIcon from '@iconify/icons-logos/unrealengine-icon';
import gameController from '@iconify/icons-ion/game-controller';

class About extends Component {
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
          <div className="row center mx-auto mb-5">
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
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{ 
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%"
                    }}
                  >
                    <span className="wave">{hello}!</span>
                    <br />
                    <br />
                    My name is Labib and I'm currently a 4th year student at the University of Toronto studying Math and Computer Science. In my spare time besides programming, I partake in:
                    <br />• Photography 📷
                    <br />• Muay Thai 👊
                    <br />• Video Games 🎮
                    <br />I am very enthusiastic about game development and would love to work in the industry to allow me to pursue my passion. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
