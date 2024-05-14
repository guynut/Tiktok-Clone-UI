import React, { useState } from 'react';
import Video from './Video';
import './videoPlayer.css';

function VideoPlayer() {
    const [videos, setVideos] = useState([
        {
            id: 1,
            src: '/public/videos/10000000_6749012051865870_2009479818269971665_n.mp4',
            user: 'Bell De Ni Shop',
            description: 'ตัวจิ๊ดเลยคนนี้(MILLI)😁',
            audioTrack: 'Original Audio',
            like: 456,
            share: 23,
            liked: false,
            comment: [
                { id: 1, user: 'Delves', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 2, user: 'user2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' },
                { id: 3, user: 'user3', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 4, user: 'user4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' },
                { id: 5, user: 'user5', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' }
            ]
        },
        {
            id: 2,
            src: '/public/videos/433942084_7401682416558172_6161340342641290215_n.mp4',
            user: 'Bell De Ni Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.', 
            audioTrack: 'Original Audio',
            like: 987,
            share: 23,
            liked: false,
            comment: [
                { id: 1, user: 'Delves', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 2, user: 'user2', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 3, user: 'user3', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 4, user: 'user4', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 5, user: 'user5', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' }
            ]
        },
        {
            id: 3,
            src: '/public/videos/436431252_7938106279540832_4835379077111069047_n.mp4',
            user: 'Bell De Ni Shop',
            description: 'ตัวจิ๊ดเลยคนนี้(MILLI)😁',
            audioTrack: 'Original Audio',
            like: 123,
            share: 23,
            liked: false,
            comment: [
                { id: 1, user: 'Delves', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' },
                { id: 2, user: 'user2', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 3, user: 'user3', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 4, user: 'user4', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 5, user: 'user5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' }
            ]
        },
        {
            id: 4,
            src: '/public/videos/442493894_25435448619433435_7185506555915358864_n.mp4',
            user: 'Bell De Ni Shop',
            description: 'ตัวจิ๊ดเลยคนนี้(MILLI)😁',
            audioTrack: 'Original Audio',
            like: 1860,
            share: 23,
            liked: false,
            comment: [
                { id: 1, user: 'Delves', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' },
                { id: 2, user: 'user2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' },
                { id: 3, user: 'user3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum culpa, dolorem explicabo rerum officia ab minus asperiores sunt? Facilis dolores cum similique ex atque quod quidem autem pariatur quasi.' },
                { id: 4, user: 'user4', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' },
                { id: 5, user: 'user5', text: 'ชอบมากเลยค่าๆๆๆๆๆๆ' }
            ]
        },
    ]);
    const toggleLike = (videoId) => {
        setVideos(videos.map(video => {
            if (video.id === videoId) {
                return {
                    ...video,
                    liked: !video.liked,
                    like: video.liked ? video.like - 1 : video.like + 1
                };
            }
            return video;
        }));
    };

    return (
        <>
            <div className='FrameContainer'>
                {videos.map((video, index) => (
                    <div key={index} className='videosMap'>
                        <Video src={video.src} user={video.user} description={video.description} like={video.like} audioTrack={video.audioTrack} share={video.share} comment={video.comment} onLike={() => toggleLike(video.id)} liked={video.liked}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default VideoPlayer;
