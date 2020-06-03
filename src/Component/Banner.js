import React, { Component } from 'react';
import { faAccessibleIcon, faGithub, faTwitter, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/tudor-baciu-vc3iVL_znJ8-unsplash-me2.jpg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides}/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4> I Am Sara McCombs</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Software Engineer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="theme-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Sara McCombs - Software Engineer</p></div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faDev} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;