import GalleryItem from '../GalleryItem/GalleryItem.jsx';

const GalleryList = ({ galleryItems }) => {
    return (
        <ul>
            {galleryItems.map((item) => (
                <GalleryItem item = { item } key = {item.id}/>
            ))}
        </ul>
    );
};

export default GalleryList;