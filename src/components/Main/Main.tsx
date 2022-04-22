import React from 'react';
import s from './Main.module.css'
import {GrayCurtain} from '../GrayCurtain';
import {NavLink} from 'react-router-dom';
import {Button} from '../Button/Button';

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
                    <NavLink to="/about/*" className={s.link}>
                        <Button/>
                    </NavLink>

                </div>
            </div>
        </div>

    );
};