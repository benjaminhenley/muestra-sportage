import React, { useEffect, useMemo, useState, useRef } from "react";
import ImageModal from "./ImageModal";
import SquareButton from "./ui/SquareButton";
import VerticalScroll from "./VerticalScroll";

const sortByPath = (entries) =>
  entries.sort(([pathA], [pathB]) => pathA.localeCompare(pathB));

const toImageObjects = (sortedEntries) =>
  sortedEntries.map(([path, url]) => ({
    src: { desktop: url },
    alt: path.split("/").pop(),
  }));

const useGalleryImages = (modelId) => {

  // Import model-specific images (shown on top)
  const modelImages = useMemo(() => {
    const sportageModules = import.meta.glob(
      "../assets/images/galleryModel/sportage-*.webp",
      { eager: true, import: "default" }
    );
    return toImageObjects(sortByPath(Object.entries(sportageModules)));
  }, [modelId]);

  return useMemo(
    () => [...modelImages],
    [modelImages]
  );
};

const GalleryModal = ({ onClose, modelId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = useGalleryImages(modelId);

  const scrollerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div
        className="relative bg-white w-full max-w-[1300px] h-[600px] max-h-[600px]
  flex flex-col px-10 py-4 md:p-12 gap-6 md:gap-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}>

        <section className="bg-white flex-shrink-0">
          <h3 className="mb-3">
            Nueva {modelId.charAt(0).toUpperCase() + modelId?.slice(1)}
          </h3>
          <h2 className="font-bold">Galería de Imágenes</h2>
        </section>

        <div className="relative flex-1 min-h-0">   

          {/* Image Scroller */}
          <div ref={scrollerRef} className="h-full overflow-y-auto overflow-x-hidden no-scrollbar pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              {images.map((image, idx) => (
                <div key={idx} className="w-full overflow-hidden">
                  <img
                    src={image.src.desktop}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slider */}
          <VerticalScroll
            containerRef={scrollerRef}
            rightPosition={0}
            topOffset={0}
            bottomOffset={0}
            smoothScroll={true}
            visible={false}
          />

        </div>     

        <div className="flex justify-center">
          <SquareButton className="w-full md:w-auto" onClick={onClose}>
            Cerrar
          </SquareButton>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default GalleryModal;
