import React from "react";
import PillButton from "./PillButton";
import { Link } from "react-router-dom";
import SquareButton from "./SquareButton";

const CompletedFormBanner = ({ name, setIsCompleted }) => {
  const handleNewQuote = () => {
    // Reset the form state and go back to step 1
    setIsCompleted(false);
    // You might want to reset other form states here
    window.location.reload(); // Simple way to reset everything
  };

  const handleGoHome = () => {
    // Navigate to home page
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[400px] p-8 bg-[#F8F8F8] border border-[#CDD0D2] ">
      <div className="text-center">
        {/* Greeting */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ¡Hola, {name}!
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Muchas gracias por interesarte en nuestros vehículos.
          <br /> Vamos a estar contactándolo a la brevedad.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SquareButton onClick={handleNewQuote} type="secondary">
            {" "}
            Deseo hacer otra cotización
          </SquareButton>

          <SquareButton onClick={handleGoHome} type="primary">
            Volver al Inicio
          </SquareButton>
        </div>
      </div>
    </div>
  );
};

export default CompletedFormBanner;
