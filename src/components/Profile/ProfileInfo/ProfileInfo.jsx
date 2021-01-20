import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'/>
            </div>
            <div className={style.discription}>
                ava +description
            </div>
        </div>
    )
}

export default ProfileInfo;