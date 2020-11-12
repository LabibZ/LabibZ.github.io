import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return(
            <div>
                <nav className="navbar">
                    <div className="hamburger" onClick={this.change}>
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>

                    <ul className="nav-list">
                        <li className="nav-item" onClick={this.change}>
                            <Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item" onClick={this.change}>
                            <Link to="/projects" className="nav-link">Projects</Link></li>
                        <li className="nav-item" onClick={this.change}>
                            <Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }

    change() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle("change");
    }

}

export default Menu;