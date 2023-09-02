import React, { useState } from 'react';
import '../css/carousel.css'; 
import Arrow_forward from "../images/arrow_forward.png"
import Arrow_back from "../images/arrow_back.png"

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel__slide">
            {images.length > 1 && ( 
                <button className="arrow left" onClick={goToPrevious}><img src={Arrow_back} alt="bouton précédent"/></button>
            )}
            <img className="image" src={images[currentIndex]} alt={`logement ${currentIndex + 1}`} />
            {images.length > 1 && ( 
                <button className="arrow right" onClick={goToNext}><img src={Arrow_forward} alt="bouton suivant"/></button>
            )}
            <div className="pagination">
                {`${currentIndex + 1}/${images.length}`}
            </div>
        </div>
    );
}

export default Carousel;