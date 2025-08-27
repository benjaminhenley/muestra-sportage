import React from "react";
import { Link } from "react-router-dom";
import PillButton from "./ui/PillButton";
import { autos } from "../data/autos";

const VehiculoCard = () => {
  const handleClick = (e) => {
    window.scrollTo(0, 0);
  };

  const handleConsultarPrecios = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-12 px-4 bg-white font-kia">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-center mb-8">Nuestros Vehículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {autos.map((vehiculo, index) => (
            <div
              key={index}
              className="text-center  transition-colors p-6 rounded-lg border border-gray-200">
              {/* Nuevo badge */}
              <div className="h-6 flex justify-start mb-4">
                {vehiculo.esNuevo && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    NUEVO
                  </span>
                )}
              </div>

              {/* Vehicle image and name */}
              <div className="mb-4">
                {vehiculo.esExterna ? (
                  <a
                    href={vehiculo.href}
                    target={vehiculo.target}
                    rel="noreferrer"
                    onClick={handleClick}
                    className="block">
                    <img
                      className="w-full h-auto max-w-md mx-auto"
                      src={vehiculo.foto}
                      alt={vehiculo.nombre}
                    />
                    <h3 className="text-xl font-bold mt-4">
                      {vehiculo.nombre}
                    </h3>
                  </a>
                ) : (
                  <Link
                    to={vehiculo.href}
                    onClick={handleClick}
                    className="block">
                    <img
                      className="w-full h-auto max-w-md mx-auto"
                      src={vehiculo.foto}
                      alt={vehiculo.nombre}
                    />
                    <h3 className="text-xl font-bold mt-4">
                      {vehiculo.nombre}
                    </h3>
                  </Link>
                )}
              </div>

              {/* Price */}
              <div className="text-lg font-semibold mb-6 text-gray-700">
                {vehiculo.precio}
              </div>

              {/* Price consultation button */}
              <a
                href="https://www.kia.com.ar/precios"
                target="_blank"
                rel="noreferrer"
                onClick={handleClick}>
                <div className="w-full flex justify-center">
                  <PillButton
                    onClick={handleConsultarPrecios}
                    title="Consultar precios"
                    type="primary"
                    size="small"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiculoCard;
