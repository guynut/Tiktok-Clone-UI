import React from 'react';
import './videoPlayer.css';
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Comment({setComOpen, comment}){
    return(
        <>
            <div className='CommentContainer'>
                <div className='tileComment'>
                    <h2> Comment </h2>
                    <button onClick={() => setComOpen(false)}> <FontAwesomeIcon icon={faXmark} id='faXmark' size="2xl" /> </button>
                </div>
                <div className='CommentContainMap-Scroll'>
                    {comment.map((comment, index) => (
                        <CommentDetail key={index} user={comment.user} text={comment.text}/>
                    ))}
                </div>
            </div>
        </>
    )
}
function CommentDetail({user, text}) {
    return(
        <>
            <div className='CommentContainMap'>
                <div className='UserComment'>
                    <img src="/public/images/how-to-stop-being-a-people-pleaser-1_1.jpg" alt="" />
                    <h3> {user} </h3>
                </div>
                <p> {text} </p>
            </div>
        </>
    )
}

export default Comment;