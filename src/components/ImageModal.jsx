import React from "react";

const ImageModal = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-hidden flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="relative mx-auto flex flex-col bg-white overflow-hidden min-w-[max-content] max-w-[90vw] max-h-[98vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className="w-[50px] h-[50px] absolute top-0 right-0 p-2 z-10 text-white hover:bg-gray-800 bg-[#05141F]"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          X
        </button>

        <div className="bg-white max-w-[50vw]">
          <img
            src={image.src.desktop}
            alt={image.alt}
            className="w-full h-auto object-contain max-w-[50vw]"
          />
          {image.modalDescription && image.modalDescription !== "" && (
            <div className="p-6">
              <div className="w-[40px] h-[2px] bg-[#05141F] mb-3" />
              <h6 className="text-[#05141F] text-2xl mt-2 font-[600]">
                {image.modalDescription}
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
