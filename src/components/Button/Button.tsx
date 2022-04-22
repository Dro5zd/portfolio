import React from 'react';
import s from './Button.module.css';
import img from '../Main/myPortrait.jpg';

export const Button = () => {
    return (
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
    );
};
