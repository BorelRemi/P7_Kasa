import React, { useState } from 'react';
import '../css/carousel.css'; 

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <button className="arrow left" onClick={goToPrevious}>&#x25C0;</button>
            <img className="image" src={images[currentIndex]} alt={`Image ${currentIndex}`} />
            <button className="arrow right" onClick={goToNext}>&#x25B6;</button>
        </div>
    );
}

export default Carousel;