import AllNewK3Sedan from "../assets/images/AllNewK3Sedan.webp";
import AllNewK3Cross from "../assets/images/AllNewK3Cross.webp";
import { sedanImagesByColor } from "./sedanSliderImages";
import { crossImagesByColor } from "./crossSliderImages";

export const autos = [
  {
    id: "sedan",
    modelo: "K3 Sedán",
    nombre: "All-new K3 Sedán",
    href: "/k3-sedan",
    target: "",
    esExterna: false,
    esNuevo: true,
    foto: AllNewK3Sedan,
    colors: sedanImagesByColor,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $25.000USD <span className="font-regular text-kia-gray">EX*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $28.500USD{" "}
          <span className="font-regular text-kia-gray">GT-Line*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    id: "cross",
    modelo: "K3 Cross",
    nombre: "All-new K3 Cross",
    href: "/k3-cross",
    target: "",
    esExterna: false,
    esNuevo: true,
    foto: AllNewK3Cross,
    colors: crossImagesByColor,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $25.000USD <span className="font-regular text-kia-gray">EX*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $28.500USD{" "}
          <span className="font-regular text-kia-gray">GT-Line*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
];
