import './GalleryItem.css'

const GalleryItem = ({ item }) => {

    const likeCounter = () => {
        if (item.likes <= 0) {
            return (<p className = 'like-counter'>No likes yet</p>)
        } else {
            return (<p className = 'like-counter'>Likes: {item.likes}</p>)
        };
    };

    const addLike = () => {

    };

    return (
        <span key = {item.id} className = 'item-container'>
        <img src = {item.path} className = 'image'></img>
        {likeCounter()}
        <button onClick = {addLike} className = 'like-button'>👍 Like this photo 👍</button>
        </span>
    );
};

export default GalleryItem;