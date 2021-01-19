import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'/>
            </div>
            <div>
                ava +description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;