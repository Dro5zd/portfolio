import React from 'react';
import s from './Contact.module.css'
import {GrayCurtain} from '../GrayCurtain';

export const Contact = () => {
    return (
        <div className={s.contactContainer}>
            <GrayCurtain/>
            <div className={s.contactWrapper}>
                <header>
                    <h1>GET IN<span> TOUCH</span></h1>
                    <span className={s.titleBG}>CONTACT</span>
                </header>
            </div>
        </div>
    );
};