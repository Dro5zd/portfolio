import React from 'react';
import s from './Portfolio.module.css'
import {GrayCurtain} from '../GrayCurtain';

export const Portfolio = () => {
    return (
        <div className={s.portfolioContainer}>
            <GrayCurtain/>
            <div className={s.portfolioWrapper}>
                <header>
                    <h1>MY<span> PORTFOLIO</span></h1>
                    <span className={s.titleBG}>WORKS</span>
                </header>
            </div>


        </div>
    );
};