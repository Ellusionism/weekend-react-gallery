import './GalleryItem.css';
import axios from 'axios';
import { useState } from 'react';

const GalleryItem = ({ item , getGalleryData }) => {
    const [likes, setLikes] = useState(item.likes);
    const [description, setDescription] = useState(false)

    const addLike = (id) => {
        axios.put(`/gallery/like/${id}`)
        .then ((response) => {
            setLikes(likes + 1);
            getGalleryData();
        }).catch ((error) => {
            console.log(`Error in addLikes:`, error)
        });
    };

    const handleItemClick = () => {
        setDescription(!description);
    }

    const likeCounter = () => {
        if (item.likes <= 0) {
            return (
            <>
                <p className = 'like-counter'>No likes yet</p>
                <button
                onClick = { () => addLike(item.id) }
                className = 'like-button'>👍 Like this photo 👍</button>
            </>
            )
        } else {
            return (
            <>
                <p className = 'like-counter'>Likes: {item.likes}</p>
                <button
                onClick = { () => addLike(item.id) }
                className = 'like-button'>👍 Like this photo 👍</button>
            </>
            )
        };
    };

    return (
        <>
        {description ? (
            <span className = 'item-container'>
                <div onClick = {handleItemClick}>{item.description}</div>
                {likeCounter()}
            </span>
        ) : (
            
            <span className = 'item-container'>
                <img src = {item.path} onClick = {handleItemClick} className = 'image' ></img>
                {likeCounter()}
            </span>
        )}
        </>
    );
};

export default GalleryItem;