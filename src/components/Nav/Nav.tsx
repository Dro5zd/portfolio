import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={s.navContainer}>
            <NavbarRow title='Profile' url='/profile' icon={<AccountCircleIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
            <NavbarRow title='Messages' url='/dialogs' icon={<EmailOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
            <NavbarRow title='News' url='/news' icon={<RssFeedOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
            <NavbarRow title='Music' url='/music' icon={<HeadphonesOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
            <NavbarRow title='Settings' url='/settings' icon={<SettingsOutlinedIcon sx={{ fontSize: 40 }} className={s.navbar_logo}/>}/>
<NavLink>

</NavLink>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>Home</h4>
                    <span className={s.navIconWrapper}>
                        <img className={s.navListItemIcon} src="https://img.icons8.com/ios-filled/344/ffffff/home.png"
                             alt={'home'}/>
                    </span>
                </li>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>About</h4>
                    <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src='https://img.icons8.com/ios-filled/344/ffffff/user.png'
                         alt={'user'}/>
                    </span>
                </li>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>Portfolio</h4>
                    <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src="https://img.icons8.com/ios-filled/344/ffffff/ammo-tin.png"
                         alt={'case'}/>
                    </span>
                </li>
                <li className={s.navListItem}>
                    <h4 className={s.navListItemTitle}>Contact</h4>
                    <span className={s.navIconWrapper}>
                    <img className={s.navListItemIcon} src="https://img.icons8.com/ios-filled/344/ffffff/new-post.png"
                         alt={'message'}/>
                    </span>
                </li>
            </ul>
        </div>
    );
};