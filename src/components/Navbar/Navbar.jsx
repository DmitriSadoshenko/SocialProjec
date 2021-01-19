import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a>Profile</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Massages</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>News</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Music</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;