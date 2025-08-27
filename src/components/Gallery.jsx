import React from "react";
import { images } from "../data/gallery";
import MobileSlider from "./MobileSlider";

const GalleryImage = ({ image, onImageClick, className = "" }) => (
  <img
    src={image.src.desktop}
    alt={image.alt}
    className={`w-full h-full object-cover cursor-pointer ${className}`}
    onClick={() => onImageClick(image)}
  />
);

const Gallery = ({ onImageClick }) => {
  return (
    <section className="bg-white px-4 py-10  md:p-20">
      <div className=" mx-auto">
        <h4 className="mb-2 md:mb-3">Características destacadas</h4>
        <h2 className="font-bold mb-4 md:mb-5">
          Una nueva era en diseño y tecnología
        </h2>
        <h5 className="mb-8 md:mb-16">
          La familia All-new K3 se impone con un diseño audaz, interior refinado
          y la tecnología más avanzada del segmento. Creado para inspirar cada
          movimiento, dentro y fuera de la ciudad.
        </h5>

        {/* Mobile Slider View */}
        <div className="block lg:hidden">
          <MobileSlider images={images} onImageClick={onImageClick} />
        </div>

        {/* Desktop Grid View - Better overflow handling */}
        <div
          className="hidden lg:block"
          style={{ height: "640px", maxHeight: "640px", overflow: "hidden" }}>
          <div className="grid grid-cols-2 h-full">
            {/* Left Column */}
            <div className="h-full w-full col-span-1 grid grid-rows-3 overflow-hidden">
              {/* First image takes up full height */}
              <div className="h-full w-full overflow-hidden row-span-2">
                <GalleryImage image={images[0]} onImageClick={onImageClick} />
              </div>
              <div className="h-full w-full overflow-hidden row-span-1 flex flex-row">
                {[1, 2, 3].map((i) => (
                  <GalleryImage
                    key={i}
                    image={images[i]}
                    onImageClick={onImageClick}
                  />
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="grid grid-rows-2 h-full overflow-hidden">
              {/* Bottom row divided into two images */}
              {[
                [4, 5],
                [6, 7],
              ].map((pair, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-2 overflow-hidden">
                  {pair.map((i) => (
                    <div key={i} className="overflow-hidden">
                      <GalleryImage
                        image={images[i]}
                        onImageClick={onImageClick}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
