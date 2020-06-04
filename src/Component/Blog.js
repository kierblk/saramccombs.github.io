import React, { Component } from 'react';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogImg_1 from '../Assets/Images/blog/layouts-318.jpg';
import blogImg_2 from '../Assets/Images/blog/bite-360.jpg';
import blogImg_3 from '../Assets/Images/blog/bite-360.jpg';

class Blog extends Component {
    render() {
        return (
            <section id="blog" className="blog-section section-padding">
                <div className="container">
                    <div className="col-l2">
                        <div className="section-title section-title2 text-center">
                            <span></span>
                            <h2><a href="https://dev.to/saramccombs"><FontAwesomeIcon icon={faDev} size="1x"/></a> Blog Articles</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-grids clearfix">
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={blogImg_1} alt=""/>
                                    </div>
                                    <div className="details">
                                        <h4><a href="https://dev.to/saramccombs/an-overview-templates-layouts-partials-how-things-fit-together-in-rails-1g0h">An Overview: Templates, Layouts, & Partials - How Things Fit Together in Rails </a></h4>
                                        <ul className="entry-meta">
                                            {/* <li>
                                                By <a href="#">Sara McCombs</a>
                                            </li> */}
                                            <li>February 8, 2020</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={blogImg_2} alt=""/>
                                    </div>
                                    <div className="details">
                                        <h4><a href="https://dev.to/saramccombs/functions-in-javascript-1j18">Bite-sized Learning: Javascript<br />Functions in JavaScript</a></h4>
                                        <ul className="entry-meta">
                                            {/* <li>
                                                <img src={blogAuthor}/>
                                                By <a href="#">Lily Anne</a>
                                            </li> */}
                                            <li>April 28, 2020</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={blogImg_3} alt=""/>
                                    </div>
                                    <div className="details">
                                    <h4><a href="https://dev.to/saramccombs/variables-in-javascript-1cfo">Bite-sized Learning: Javascript<br />Variables in JavaScript</a></h4>
                                        <ul className="entry-meta">
                                            {/* <li>
                                                <img src={blogAuthor}/>
                                                By <a href="#">Lily Anne</a>
                                            </li> */}
                                            <li>April 29, 2020</li>
                                        </ul>
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

export default Blog;