import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

useEffect(() => {
  getGalleryData();
}, []);

const getGalleryData = () => {
  axios({
    method: 'GET',
    url: '/gallery'
  }).then((response) => {
    console.log(response.data)
    const getData = response.data
    setGalleryItems(getData);
  }).catch((error) => {
    console.log('Error in getGalleryData:', error)
  });

};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My 2016 Road Trip</h1>
        </header>
        <GalleryList galleryItems = { galleryItems } getGalleryData = { getGalleryData } />
      </div>
    );
}

export default App;