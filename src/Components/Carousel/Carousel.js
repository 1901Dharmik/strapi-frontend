import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div
        className="flex overflow-x-scroll hide-scrollbar"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="thumb-wrapper">
            <div className="thumb">
              <img src={image.thumb} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="main-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
          >
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
      <div className="thumb-nav">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumb ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleThumbClick(index)}
          >
            <img src={image.thumb} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;