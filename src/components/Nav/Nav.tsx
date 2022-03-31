import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.navContainer}>


            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>Home</h4>
                    <img className={s.navListItemIcon} src='https://img.icons8.com/ios-filled/344/ffffff/home.png' alt={'home'}/>
                </li>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>About</h4>
                    <img className={s.navListItemIcon} src='https://img.icons8.com/ios-filled/344/ffffff/home.png' alt={'home'}/>
                </li>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>Portfolio</h4>
                    <img className={s.navListItemIcon} src='https://img.icons8.com/ios-filled/344/ffffff/home.png' alt={'home'}/>
                </li>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>Contact</h4>
                    <img className={s.navListItemIcon} src='https://img.icons8.com/ios-filled/344/ffffff/home.png' alt={'home'}/>
                </li>
            </ul>
        </div>
    );
};