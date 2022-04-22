import React from 'react';
import s from './About.module.css'
import {GrayCurtain} from '../GrayCurtain';
import {Button} from '../Button/Button';

export const About = () => {
    return (
        <div className={s.aboutContainer}>
            <GrayCurtain/>
            <div className={s.aboutWrapper}>
                <header>
                    <h1>ABOUT<span> ME</span></h1>
                    <span className={s.titleBG}>RESUME</span>
                </header>
                <div className={s.personalInfos}>
                    <div className={s.personalInfosLeft}>
                        <h3>PERSONAL INFO</h3>
                        <div className="mainInfo">
                            <ul>
                                <li>First Name: Andrii</li>
                                <li>Last Name: Drobotyuk</li>
                                <li> Age: 40 Years</li>
                                <li>Nationality: Ukrainian</li>
                                <li>Freelance: Available</li>
                                <li>Address: Kyiv</li>
                                <li>Phone: +380936888885</li>
                                <li>Email: adrobotyuk@gmail.com</li>
                                <li>Skype: steve.milner</li>
                                <li>Languages: Ukrainian, English, russian</li>
                            </ul>
                            <Button/>
                        </div>

                    </div>
                    <div className={s.personalInfosRight}>
                        <div className={s.personalInfosContainer}>
                            <h3>12+</h3>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className={s.personalInfosContainer}>
                            <h3>97+</h3>
                            <p>COMPLETED PROJECTS</p>
                        </div>
                        <div className={s.personalInfosContainer}>
                            <h3>81+</h3>
                            <p>HAPPY CUSTOMERS</p>
                        </div>
                        <div className={s.personalInfosContainer}>
                            <h3>53+</h3>
                            <p>AWARDS WON</p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div>
                    <h4>MY SKILLS</h4>
                    <div>
                        <span>HTML</span>
                        <div className="round">25%</div>
                    </div>
                    <div>
                        <span>JAVASCRIPT</span>
                        <div className="round">89%</div>
                    </div>
                    <div>
                        <span>CSS</span>
                        <div className="round">70%</div>
                    </div>
                    <div>
                        <span>PHP</span>
                        <div className="round">66%</div>
                    </div>
                    <div>
                        <span>WORDPRESS</span>
                        <div className="round">95%</div>
                    </div>
                    <div>
                        <span>JQUERY</span>
                        <div className="round">50%</div>
                    </div>
                    <div>
                        <span>ANGULAR</span>
                        <div className="round">65%</div>
                    </div>
                    <div>
                        <span>REACT</span>
                        <div className="round">45%</div>
                    </div>
                </div>

                <hr/>

                <div>
                    <h4>EXPERIENCE & EDUCATION</h4>
                    <div className={s.experienceLeft}>
                        <ul>
                            <li>
                                <div className="icon"></div>
                                <span>2018 - PRESENT</span>
                                <h5>WEB DEVELOPER - ENVATO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                    elit</p>
                            </li>
                            <li>
                                <div className="icon"></div>
                                <span>2018 - PRESENT</span>
                                <h5>WEB DEVELOPER - ENVATO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                    elit</p>
                            </li>
                            <li>
                                <div className="icon"></div>
                                <span>2018 - PRESENT</span>
                                <h5>WEB DEVELOPER - ENVATO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                    elit</p>
                            </li>
                        </ul>
                    </div>
                    <div className={s.experienceRight}>
                        <ul>
                            <li>
                                <div className="icon"></div>
                                <span>2018 - PRESENT</span>
                                <h5>WEB DEVELOPER - ENVATO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                    elit</p>
                            </li>
                            <li>
                                <div className="icon"></div>
                                <span>2018 - PRESENT</span>
                                <h5>WEB DEVELOPER - ENVATO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                    elit</p>
                            </li>
                            <li>
                                <div className="icon"></div>
                                <span>2018 - PRESENT</span>
                                <h5>WEB DEVELOPER - ENVATO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing
                                    elit</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};