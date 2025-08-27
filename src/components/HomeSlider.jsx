import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeSlider } from "../data/homeSlider";

// Función para el evento de clic en el banner hero
const eventoDL_hero = (e, b, l) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: e,
    comp_page: {
      name_banner: b,
      link: l,
    },
  });
};

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Inicia el fade out
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % homeSlider.length);
        setFade(true); // Inicia el fade in
      }, 300); // Duración del fade out
    }, 7000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slide = homeSlider[currentSlide];
    // Envía el evento de visualización con los datos del slide actual
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "hero_banner_view",
      comp_page: {
        name_banner: slide.titulo || "kia slide",
        link: slide.linkBoton || "#",
      },
    });
  }, [currentSlide]);

  const goToSlide = (slideIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setFade(true);
    }, 300);
  };

  const slide = homeSlider[currentSlide];

  // Función para manejar el clic en el botón externo con dataLayer
  const handleExternalLinkClick = (e, slide) => {
    // Prevenimos la navegación predeterminada para asegurar que el dataLayer se registre
    e.preventDefault();

    // Registramos el evento de clic en el dataLayer con información del slide actual
    eventoDL_hero(
      "hero_banner_click",
      slide.titulo || "kia slide",
      slide.linkBoton || "#"
    );

    // Redirigimos después de un pequeño retraso para asegurar que el dataLayer se registre
    setTimeout(() => {
      if (slide.target === "_blank") {
        window.open(slide.linkBoton, slide.target);
      } else {
        window.location.href = slide.linkBoton;
      }
    }, 100);
  };

  // Función para manejar el clic en enlaces internos
  const handleInternalLinkClick = (slide) => {
    // Solo registramos el evento en el dataLayer
    eventoDL_hero(
      "hero_banner_click",
      slide.titulo || "kia slide",
      slide.linkBoton || "#"
    );
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden mt-[-110px]">
      {/* Contenedor de imagen para móvil con proporción definida */}
      <div className="relative w-full h-full">
        {/* Imagen Mobile - Ahora con 100vh */}
        <img
          src={slide.imagenMobile}
          alt={slide.titulo}
          className={`block lg:hidden relative w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Imagen Desktop */}
        <img
          src={slide.imagen}
          alt={slide.titulo}
          className={`hidden lg:block w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Contenido - Ahora absolutamente posicionado tanto en móvil como en desktop */}
        <div className="absolute px-1 pb-3 inset-0 flex flex-col items-center justify-end text-white z-20">
          <h1
            className="font-bold animate-fade-in"
            style={{ animation: "fadeIn 1s ease-in" }}>
            {slide.titulo}
          </h1>
          <p className="text-[1rem] py-1 xl:text-[1.5rem] 2xl:text-[2.5rem] 2xl:py-3 win:text-[1rem] win:py-1 mb-6">
            {slide.subtitulo}
          </p>

          {/* Indicatores Dots */}
          <div className="flex space-x-2 md:space-x-3 mb-4 md:mb-6">
            {homeSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 sm:w-10 h-[4px] transition-all duration-300 ease-in-out ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
