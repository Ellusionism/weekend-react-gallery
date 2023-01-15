import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
      </div>
    );
}

export default App;