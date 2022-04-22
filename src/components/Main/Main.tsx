import React from 'react';
import s from './Main.module.css'
import img from './myPortrait.jpg'
import {GrayCurtain} from '../GrayCurtain';
import {NavLink} from 'react-router-dom';

export const Main = () => {
    return (
        <div className={s.mainContainer}>
            <GrayCurtain/>
            <div className={s.yellowBlock}/>
            <div className={s.container}>
                <div className={s.mainPhotoWrapper}>
                    <div className={s.mainPhoto}/>
                    <div className={s.mainPhotoBG}/>
                </div>
                <div className={s.textContainer}>
                    <h2>I'm Drobotyuk Andrii.</h2>
                    <span>Front-end developer</span>
                    <p>I'm a Ukrainian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                        <NavLink to="/about/*" style={{textDecoration: 'none', width: '218px'}}>
                            <div className={s.btnWrapper}>
                            <div className={s.mainBtn}>
                                <a className={s.mainBtnTitle}>more about me</a>
                                <div className={s.mainBtnCircle}>
                                    <img className={s.mainBtnIcon}
                                         src="https://img.icons8.com/ios-filled/344/ffffff/right--v1.png"
                                         alt={'home'}/>
                                </div>
                            </div>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>

    );
};