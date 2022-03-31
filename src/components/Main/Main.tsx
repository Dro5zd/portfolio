import React from 'react';
import s from './Main.module.css'
import img from './myPortrait.jpg'
import {Nav} from '../Nav/Nav';

export const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.yellowBlock}/>
            <img className={s.mainPhoto} src={img} alt="portrait"/>
            <Nav/>
        </div>
    );
};