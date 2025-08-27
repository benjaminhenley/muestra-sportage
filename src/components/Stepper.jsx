import React, { useEffect, useState } from "react";
import CheckIcon from "../assets/checkmark.svg";

const Stepper = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Modelo", label: "Modelo" },
    { id: 2, name: "Versión", label: "Elegí tu versión" },
    { id: 3, name: "Color", label: "Elegí tu color" },
    { id: 4, name: "Parte de pago", label: "Recibimos tu auto" },
    { id: 5, name: "Datos de contacto", label: "Ingresá tus datos" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const isCompleted = currentStep === 6;

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Sizes
  const stepHeight = isMobile ? 103 : 142;
  const stepPadding = isMobile ? 0 : 30;

  const outerClip = (isFirst) =>
    isFirst
      ? "polygon(calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 0 0)"
      : "polygon(calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%, calc(0% + 16px) 50%, 0% 0%)";

  const gridColsClass = isMobile ? "grid-cols-7" : "grid-cols-5";

  return (
    <div className="w-full mb-1">
      <div
        className={`grid ${
          isCompleted ? "grid-cols-5" : gridColsClass
        } ml-4 items-stretch`}>
        {steps.map((step) => {
          const isFirst = step.id === 1;
          const isCurrent = step.id === currentStep;
          const isDone = step.id < currentStep;

          const fillColor = isCurrent
            ? "#04111B"
            : isDone
            ? "#F8F8F8"
            : "white";

          // On mobile, make current step span 3 columns, others 1
          const colSpanClass = isMobile
            ? isCurrent
              ? "col-span-3"
              : "col-span-1"
            : "col-span-1";

          return (
            <div
              key={step.id}
              style={{
                clipPath: outerClip(isFirst),
                background: "#CDD0D2",
                padding: 1,
                height: `${stepHeight}px`,
              }}
              className={`-ml-[17px] relative ${colSpanClass}`}>
              <div
                style={{
                  clipPath: outerClip(isFirst),
                  background: fillColor,
                  height: `${stepHeight - 2}px`,
                  padding: `${stepPadding}px`,
                }}
                className="w-full h-full flex items-center justify-center">
                {/* CONTENT */}
                {isMobile ? (
                  isCurrent ? (
                    <div className="relative text-center text-white w-ful ml-2">
                      <h4 className="mb-[5px]">Paso {step.id}</h4>
                      <h3 className="font-bold leading-tight max-w-[95px]">
                        {step.label}
                      </h3>
                      {/* bottom pointer */}
                      <div
                        className="absolute left-1/2 -bottom-3 -translate-x-1/2"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "10px solid transparent",
                          borderRight: "10px solid transparent",
                          borderTop: "14px solid #04111B",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`${
                        isFirst ? "" : "ml-2"
                      } text-[#05141F] flex flex-col items-center justify-center`}>
                      <h4>{step.id}</h4>
                      {isDone && (
                        <img src={CheckIcon} alt="check" className="w-6 h-6 " />
                      )}
                    </div>
                  )
                ) : (
                  // DESKTOP CONTENT (unchanged behavior)
                  <div className="flex items-center justify-center">
                    {step.id < currentStep ? (
                      <div className="flex flex-col items-center">
                        <h4 className="mb-3">{step.name}</h4>
                        <img src={CheckIcon} alt="check" />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <h4
                          className={`${
                            isCurrent ? "text-white" : "text-[#05141F]"
                          }`}>
                          Paso {step.id}
                        </h4>
                        <h3
                          className={`mt-2 text-center font-bold ${
                            isCurrent ? "text-white" : "text-[#05141F]"
                          }`}>
                          {step.label}
                        </h3>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
