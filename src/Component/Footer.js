import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAccessibleIcon, faGithub, faDev, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                    <img src={Logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li>
                                        <a href="https://www.linkedin.com/in/sara-mccombs/" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/dino_momma" target="_blank">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/saramccombs/" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dev.to/saramccombs" target="_blank">
                                            <FontAwesomeIcon icon={faDev} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright - 2020<span> Sara McCombs</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;