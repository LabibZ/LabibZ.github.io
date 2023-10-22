import React, { Component } from "react";
import Typical from "react-typical";
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <div className="intro-overlay"></div>	
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              {/* <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span> */}
              <img className="header-image" src="images/header_white.png" height={400}/>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
        <ul className="intro-social">        
          <li><a href="https://github.com/LabibZ"><FaGithub/></a></li>
          <li><a href="https://www.instagram.com/labib_mm/"><FaInstagram/></a></li>
          <li><a href="https://www.linkedin.com/in/labibmz/"><FaLinkedin/></a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
