import React, { useState } from "react";
import PillButton from "./ui/PillButton";
import RangeSlider from "./ui/RangeSlider";
import GalleryModal from "./GalleryModal";

const CarImages = ({ currentColor, modelId }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const totalPositions = 7;

  const handlePositionChange = (position) => {
    setCurrentPosition(position);
  };

  const handleGalleryClick = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="md:p-8 overflow-clip">
        {/* Car Image */}

        {/* Position Slider */}

        <div className="flex flex-col items-center justify-center relative">
          <div className="mb-5">
            <img
              src={currentColor.images[currentPosition]}
              alt={`Kia K3 Cross`}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex w-full justify-center z-10">
            <RangeSlider
              min={0}
              max={totalPositions}
              value={currentPosition}
              onChange={handlePositionChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-5  md:flex-row gap-5 md:gap-10">
        {/* Disclaimer */}
        <h6 className=" text-[#05141F] font-light">
          *Las imágenes son meramente referenciales todo el equipamiento varía según versión. Los colores mostrados son colores referenciales disponibles del modelo, la disponibilidad de los mismos va depender del stock. 
          Su tonalidad puede variar en la unidad física.
        </h6>
        <div>
          <PillButton
            isWide={true}
            className="w-full md:w-[180px]"
            onClick={handleGalleryClick}
            title="Ver galería"
            type="primary"
            size="large"
          />
        </div>
      </div>

      {isGalleryOpen && (
        <GalleryModal onClose={handleCloseGallery} modelId={modelId} />
      )}
    </div>
  );
};

export default CarImages;
