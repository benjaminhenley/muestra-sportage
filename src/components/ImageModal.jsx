import React from "react";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-hidden flex justify-center items-center">
      <div
        className="relative mx-auto flex flex-col bg-white overflow-hidden max-w-[min(60vh,700px)] max-h-[98vh]"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="w-[50px] h-[50px] absolute top-0 right-0 p-2 z-10 text-white hover:bg-gray-800 bg-[#05141F]"
          onClick={onClose}
          aria-label="Close modal">
          X
        </button>

        <div className="bg-white ">
          <img
            src={image.src.desktop}
            alt={image.alt}
            className="w-full h-auto"
          />
          {/* <h6 className="text-[#05141F]">{image.modalDescription}</h6> */}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
