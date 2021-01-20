import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            {props.message}
            <div>
                <span>like</span> {props.likecount}
            </div>
        </div>
    )
}

export default Post;