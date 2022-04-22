import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom';

type NavbarRowPropsType = {
    path: string
    title: string
    icon: string
}

export const NavbarRow = (props: NavbarRowPropsType) => {
    return (
        <div className={s.navContainer}>
            <NavLink to={props.path} className={navData => navData.isActive ? `${s.navListItemActive} ${s.navListItem}` : s.navListItem}>
                <h4 className={s.navListItemTitle}>{props.title}</h4>
                <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src={props.icon} alt={'message'}/>
                    </span>
            </NavLink>
        </div>
    );
};