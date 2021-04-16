import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='https://i.pinimg.com/originals/4a/b5/6c/4ab56c046cd8dc1bd4c1096d1f14ca96.png'/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;