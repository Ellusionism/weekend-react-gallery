import GalleryItem from '../GalleryItem/GalleryItem.jsx';

const GalleryList = ({ galleryItems }) => {
    return (
        <div className = 'item-list'>
            {galleryItems.map((item) => (
                <GalleryItem item = { item } key = {item.id}/>
            ))}
        </div>
    );
};

export default GalleryList;