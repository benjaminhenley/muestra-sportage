import {HomeBanner} from "../components/HomeBanner";
import VehiculoCard from "../components/VehiculoCard";
import Familia from "../components/Familia";
import Gallery from "../components/Gallery";
import ImageModal from "../components/ImageModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Inicio() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <Navbar />
      <HomeBanner />
      <Familia />
      <Gallery onImageClick={openModal} />

      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}
    </>
  );
}
