import SportageSUV  from "../assets/images/SportageSUV.webp"; 

import { sportageImagesByColor } from "./sportageSliderImages";



export const autos = [
  {
    id: "sportage",
    modelo: "Sportage",
    nombre: "Sportage",
    href: "/sportage",
    target: "",
    esExterna: false,
    esNuevo: true,
    foto: SportageSUV,
    colors:sportageImagesByColor, 
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          <span className="font-regular text-kia-gray">Desde</span> $48.000USD
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
];
