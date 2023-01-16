import GalleryItem from '../GalleryItem/GalleryItem.jsx';

const GalleryList = ({ galleryItems , getGalleryData }) => {

    return (
        <div className = 'item-list'>
            {galleryItems.map((item) => (
                <GalleryItem key = {item.id} item = { item } getGalleryData = { getGalleryData } />
            ))}
        </div>
    );
};

export default GalleryList;