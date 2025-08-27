// Imports fotos Desktop
import AllNewK3 from "../assets/images/homeSlider/k3.webp";
import AllNewK3Cross from "../assets/images/homeSlider/cross.webp";
import AllNewK3Sedan from "../assets/images/homeSlider/sedan.webp";

//Imports fotos Mobile
import AllNewK3Mobile from "../assets/images/homeSlider/k3-mobile.webp";
import AllNewK3CrossMobile from "../assets/images/homeSlider/cross-mobile.webp";
import AllNewK3SedanMobile from "../assets/images/homeSlider/sedan-mobile.webp";

// Este archivo contiene los datos para el slider
export const homeSlider = [
  {
    imagen: AllNewK3,
    imagenMobile: AllNewK3Mobile,
    titulo: "All-new K3",
    subtitulo: "Más allá de lo posible",
    textoBoton: "Lo quiero",
    linkBoton: "https://reservak3.kia.com.ar/ess",
    target: "_blank",
    esExterna: true,
  },
  {
    imagen: AllNewK3Cross,
    imagenMobile: AllNewK3CrossMobile,
    titulo: "All-new K3 Cross",
    subtitulo: "Más allá de lo posible",
    textoBoton: "Conocer más",
    linkBoton: "/k3-cross",
    target: "",
    esExterna: false,
  },
  {
    imagen: AllNewK3Sedan,
    imagenMobile: AllNewK3SedanMobile,
    titulo: "All-new K3 Sedán",
    subtitulo: "Más allá de lo posible",
    textoBoton: "Conocer más",
    linkBoton: "/k3-sedan",
    target: "",
    esExterna: false,
  },
];
