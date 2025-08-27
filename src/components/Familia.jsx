import React from "react";
import PillButton from "./ui/PillButton";
import { autos } from "../data/autos";
import { useNavigate } from "react-router-dom";

const Familia = () => {
  const navigate = useNavigate();

  const handleConsultarPrecios = (id) => {
    navigate(`/${id}`);
  };

  return (
    <section className=" mx-auto px-4 py-10  md:p-20 bg-[#F5F5F5]">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Content - Text Section */}
          <div className="flex flex-col justify-start">
            <h4 className="font-normal text-gray-600 mb-4">Familia K3</h4>
            <h2 className="font-semibold text-[#04141F] mb-6">
              Conocé el All-new K3 Cross y Sedán
            </h2>
            <hr className="w-full border-[#04141F]/20 mb-8" />

            <div className="space-y-4 text-gray-700">
              <p className="text-base leading-relaxed">
                El All-new K3 encarna la nueva filosofía de Kia con un carácter
                de alta tecnología en su diseño agresivo y una personalidad
                potente, convirtiéndolo único en su segmento.
              </p>
              <p className="text-base leading-relaxed font-bold">
                Elegí la silueta de tu interés, su versión y color y un
                Concesionario Kia te va a estar brindando más información a la
                brevedad.
              </p>
            </div>
          </div>

          {/* Right Content - Vehicle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {autos.map((vehiculo, index) => (
              <div key={index} className="text-center rounded-lg p-2 md:p-6">
                {/* Vehicle Image */}
                <div className="mb-4">
                  <img
                    className="w-full h-auto max-w-full mx-auto"
                    src={vehiculo.foto}
                    alt={vehiculo.nombre}
                  />
                </div>

                {/* Vehicle Name */}
                <h3 className="font-semibold text-[#04141F] mb-3">
                  {vehiculo.nombre}
                </h3>

                {/* Price */}
                <div className="mb-6 text-gray-600">{vehiculo.precio}</div>

                {/* Consultar Precios Button */}
                <div className="w-full flex justify-center">
                  <PillButton
                    onClick={() => handleConsultarPrecios(vehiculo.id)}
                    title="Consultar precios"
                    type="primary"
                    size="medium"
                    className="w-full md:w-fit"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Familia;
