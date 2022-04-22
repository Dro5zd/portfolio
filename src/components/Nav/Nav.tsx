import React from 'react';
import s from './Nav.module.css'
import {NavbarRow} from './NavbarRow';

export const Nav = () => {
    return (
        <nav className={s.navbar}>
            <NavbarRow title='Home' path={'/home/*'} icon={"https://img.icons8.com/ios-filled/344/ffffff/home.png"}/>
            <NavbarRow title='About' path={'/about/*'} icon={"https://img.icons8.com/ios-filled/344/ffffff/user.png"}/>
            <NavbarRow title='Portfolio' path={'/portfolio/*'} icon={"https://img.icons8.com/ios-filled/344/ffffff/ammo-tin.png"}/>
            <NavbarRow title='Contact' path={'/contact/*'} icon={"https://img.icons8.com/ios-filled/344/ffffff/new-post.png"}/>
        </nav>
    );
};