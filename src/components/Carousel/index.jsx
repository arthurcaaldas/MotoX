/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./carousel.module.css";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (images.length > 1) {
      intervalRef.current = setInterval(handleNext, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [handleNext, images.length]);

  if (images.length === 0) {
    return <div className={styles.carousel}>No images to display</div>;
  }

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
      <button
        className={`${styles.button} ${styles.left}`}
        onClick={handlePrev}
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        className={`${styles.button} ${styles.right}`}
        onClick={handleNext}
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;