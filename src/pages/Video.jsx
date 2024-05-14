import React, { useEffect, useRef, useState } from 'react';
import './videoPlayer.css';
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest
import { faHeart as faHeartRe } from '@fortawesome/free-regular-svg-icons';
import { faComment, faEllipsisVertical, faHeart, faMusic, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';

function Video({ src, user, description, like, audioTrack, share, comment, onLike, liked}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [comOpen, setComOpen] =useState(false)

    const handleTogglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const handleOpenComment = ()=>{
        if ( comOpen == true ){
            setComOpen(false)
        } else {
            setComOpen(true)
        }
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, options);
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className='VideoContain' >
                <div className='videoFrame'>
                    <video ref={videoRef} loop className='videoStyle' onClick={handleTogglePlay}>
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='videoInfo'>
                    <div className='userName'>
                        <h3>{user}</h3>
                        <button>Follow</button>
                    </div>
                    <p> {description} </p>
                    <div className='AudioTrack'>
                        <button>
                            <FontAwesomeIcon icon={faMusic} id='faMusic' size="lg" />
                            <p>{audioTrack}</p>
                        </button>
                    </div>
                </div>
                <div className='videoFrameButton'>
                    <button>
                        <img src="/public/images/how-to-stop-being-a-people-pleaser-1_1.jpg" alt="" />
                    </button>
                    <button onClick={onLike}>
                        <FontAwesomeIcon icon={liked ? faHeart : faHeartRe} id={liked? 'faHeart':'faHeartRe'} size="2xl" />
                        <p>{like}</p>
                    </button>
                    <button onClick={handleOpenComment}>
                        <FontAwesomeIcon icon={faComment} id='faComment' size="2xl" />
                        <p>246</p>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} id='faPaperPlane' size="2xl" />
                        <p>{share}</p>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEllipsisVertical} id='faEllipsisVertical' size="2xl" />
                    </button>
                </div>
            </div>
            {comOpen && <Comment setComOpen={setComOpen} comment={comment}/>}
        </>
    );
}

export default Video;