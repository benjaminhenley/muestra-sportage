import { homeBanner } from "../data/homeBanner";

export const HomeBanner = () => {
    
    return (
        <div className="relative w-full h-[100vh] overflow-hidden mt-[-110px]">
          {/* Contenedor de imagen para móvil con proporción definida */}
          <div className="relative w-full h-full">
            {/* Imagen Mobile - Ahora con 100vh */}
            <img
              src={homeBanner.imagenMobile}
              alt={homeBanner.titulo}
              className={`block lg:hidden relative w-full h-full object-cover transition-opacity duration-500`}
            />
    
            {/* Imagen Desktop */}
            <img
              src={homeBanner.imagen}
              alt={homeBanner.titulo}
              className={`hidden lg:block w-full h-full object-cover transition-opacity duration-500`}
            />
            {/* Contenido - Ahora absolutamente posicionado tanto en móvil como en desktop */}
            <div className="absolute px-1 pb-3 inset-0 flex flex-col items-center justify-end text-white z-20">
              <h1
                className="font-bold animate-fade-in">
                {homeBanner.titulo}
              </h1>
              <p className="text-[1rem] py-1 xl:text-[1.5rem] 2xl:text-[2.5rem] 2xl:py-3 win:text-[1rem] win:py-1 mb-6">
                {homeBanner.subtitulo}
                texto
              </p>
            </div>
          </div>
        </div>
        );
}
