import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={s.navContainer}>
                <NavLink to="/home/*" className={navData => navData.isActive ? `${s.navListItemActive} ${s.navListItem}` : s.navListItem}>
                    <h4 className={s.navListItemTitle}>Home</h4>
                    <span className={s.navIconWrapper}>
                        <img className={s.navListItemIcon} src="https://img.icons8.com/ios-filled/344/ffffff/home.png"
                             alt={'home'}/>
                    </span>
                </NavLink>
                <NavLink to="/about/*" className={navData => navData.isActive ? `${s.navListItemActive} ${s.navListItem}` : s.navListItem}>
                    <h4 className={s.navListItemTitle}>About</h4>
                    <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src='https://img.icons8.com/ios-filled/344/ffffff/user.png'
                         alt={'user'}/>
                    </span>
                </NavLink>
                <NavLink to="/portfolio/*" className={navData => navData.isActive ? `${s.navListItemActive} ${s.navListItem}` : s.navListItem}>
                    <h4 className={s.navListItemTitle}>Portfolio</h4>
                    <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src="https://img.icons8.com/ios-filled/344/ffffff/ammo-tin.png"
                         alt={'case'}/>
                    </span>
                </NavLink>
                <NavLink to="/contact/*" className={navData => navData.isActive ? `${s.navListItemActive} ${s.navListItem}` : s.navListItem}>
                    <h4 className={s.navListItemTitle}>Contact</h4>
                    <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src="https://img.icons8.com/ios-filled/344/ffffff/new-post.png"
                         alt={'message'}/>
                    </span>
                </NavLink>
        </div>
    );
};