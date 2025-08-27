import { useEffect, useState, useCallback, useRef } from "react";

export default function MobileSlider({ images, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  const minSwipeDistance = 50;

  const goToNextSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [images]);

  const goToPrevSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  }, [images]);

  // Reset index when content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // Auto-slide effect
  useEffect(() => {
    // Set up interval for automatic sliding
    const slideInterval = setInterval(goToNextSlide, 5000);

    // Clean up interval on component unmount or content change
    return () => {
      clearInterval(slideInterval);
    };
  }, [goToNextSlide]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        // Swiped left (next slide)
        goToNextSlide();
      } else {
        // Swiped right (previous slide)
        goToPrevSlide();
      }
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative " ref={sliderRef}>
      <div
        className="w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
        <div className="relative w-full h-[337px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 w-full h-full transform transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full pointer-events-none"
                  : "opacity-0 translate-x-full pointer-events-none"
              }`}>
              <img
                src={image.src.mobile}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text content with smooth fade transition */}
      <div className="transition-opacity duration-500 ease-in-out ">
        {/* Decorative line above title */}
        {/* <div className="w-6 h-[2px] bg-current mt-6 mb-2.5"></div> */}

        {/* Feature title below mobile image */}
        <h3 className="font-medium mb-2 h-[150px] pt-10">
          {images[currentIndex]?.modalDescription || ""}
        </h3>

        {/* Description for mobile view */}
        {/* <h6 className="h-[70px] mb-2.5">
          {images[currentIndex]?.description || ""}
        </h6> */}
      </div>

      {/* Equal-sized Navigation Dots */}
      <div className="flex justify-center items-center gap-2.5 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-10 h-1 transition-all duration-500 ease-in-out touch-manipulation bg-[#82898F]`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
