import './GalleryItem.css'

const GalleryItem = ({ item }) => {

    const addLike = () => {

    };

    return (
        <li key = {item.id}>
        <img src = {item.path}></img>
        </li>
    );
};

export default GalleryItem;