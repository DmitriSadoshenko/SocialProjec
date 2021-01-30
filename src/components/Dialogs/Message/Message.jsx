import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
       <div>
           <div className={style.message}>{props.message}</div>

       </div>


    )
}

export default Message;