import React, { Component} from 'react';
import Logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    state = {
        isOpen: false,

    }
    
    render() {

        return(
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                        <div id="navbar" className={ this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({isOpen: false})}>
                                <FontAwesomeIcon icon={faTimes} />    
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({isOpen: false})}>
                            <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <ul className="nav navbar-nav">
                                <li className="home">
                                    <a href="index.html" onClick={() => this.setState({isOpen: false})}>
                                        <h1 className="text-center text-white">Home</h1>
                                    </a>
                                </li>
                                <li className="about">
                                    <a href="#about" onClick={() => this.setState({isOpen: false})}>
                                        <h1 className="text-center text-white">About Me</h1>
                                    </a>
                                </li>
                                <li className="blog">
                                    <a href="#blog" onClick={() => this.setState({isOpen: false})}>
                                        <h1 className="text-center text-white">Publications</h1>
                                    </a>
                                </li>
                                <li className="contact">
                                    <a href="#contact" onClick={() => this.setState({isOpen: false})}>
                                        <h1 className="text-center text-white">Contact</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button className="menu-open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;