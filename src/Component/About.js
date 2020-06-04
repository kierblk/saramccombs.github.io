import React, { Component } from 'react';
import { faAccessibleIcon, faGithub, faDev, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImg from '../Assets/Images/Sara-1.png';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <h2>About Me</h2>
                                </div>
                                <p>I am a disabled software engineer with passions not only for solving intriguing problems but also for designing a better future for myself.</p>

                                <p>My background in agricultural outreach and research helps me understand exactly how software can empower and change the lives of even the most remote communities. It has also fostered some "MacGyver" problem-solving skills.</p>

                                <p>I write blogs to share with others what I've learned, support and moderate online communities, and passionately advocate for diversity, inclusion, and accessibility.</p>

                                <p>When not chasing my daughter around outside, I enjoy a good book -- or seven, an Americano, and the company of my husband and dogs.</p>
                                
                                <div className="btns">
                                    <a href="https://www.linkedin.com/in/sara-mccombs/" target="_blank" className="theme-btn"><FontAwesomeIcon icon={faLinkedin} size="1x"/></a>

                                    <a href="https://twitter.com/dino_momma" target="_blank" className="theme-btn"><FontAwesomeIcon icon={faTwitter} size="1x"/></a>

                                    <a href="https://github.com/saramccombs/" target="_blank" className="theme-btn"><FontAwesomeIcon icon={faGithub} size="1x"/></a>

                                    <a href="https://dev.to/saramccombs" target="_blank" className="theme-btn"><FontAwesomeIcon icon={faDev} size="1x"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;