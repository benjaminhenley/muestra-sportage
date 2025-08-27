import React, { useEffect, useState } from "react";
import SquareButton from "./SquareButton";
import FormDropdown from "./form/FormDropdown";
import TextField from "./form/TextField";
import PillButton from "./PillButton";
import {
  marcas,
  estados,
  kilometrajes,
  años,
  concesionarios,
} from "../../data/formData";
import Checkbox from "./form/Checkbox";

const Step = ({
  modelData,
  currentStep,
  colorChange,
  currentColor,
  setStep2Data,
  setStep4Data,
  setStep5Data,
  step2Data,
  step4Data,
  step5Data,
  setCurrentStep,
}) => {
  const renderStepContent = () => {
    switch (currentStep) {
      case 2:
        return (
          <div className="flex flex-col gap-10 ">
            <div>
              <h4 className="font-regular text-[#05141F] mb-5">
                Modelo {modelData.modelo}
              </h4>
              <h2 className="font-semibold text-[#04141F] border-b pb-3 border-[#05141F]">
                Elegí la versión que deseás cotizar
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <div
                className={`flex justify-between items-center  p-4 bg-[#F8F8F8] cursor-pointer ${
                  step2Data.version === "EX"
                    ? "border-2 border-[#05141F]"
                    : "border border-[#CDD0D2]"
                }`}
                onClick={() => setStep2Data({ version: "EX" })}>
                <h5 className="font-semibold">EX</h5>
                <h6 className="text-[#05141F] font-regular">
                  Desde US$ 25.000
                </h6>
              </div>
              <div
                className={`flex justify-between items-center border p-4 bg-[#F8F8F8] cursor-pointer ${
                  step2Data.version === "GT-LINE"
                    ? "border-2 border-[#05141F]"
                    : "border border-[#CDD0D2]"
                }`}
                onClick={() => setStep2Data({ version: "GT-LINE" })}>
                <h5 className="font-semibold">GT-Line</h5>
                <h6 className="text-[#05141F] font-regular">
                  Desde US$ 28.500
                </h6>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-10 ">
            <div>
              <h4 className="font-normal text-gray-600 mb-4">
                Modelo {modelData.modelo}
              </h4>
              <h2 className="font-semibold text-[#04141F] mb-6">
                Elegí el color de tu preferencia
              </h2>
              <hr className="border-t border-[#05141F]" />
            </div>
            <div>
              <h4 className="font-regular mb-5">{currentColor.name}</h4>

              <div className="flex gap-5 w-full justify-between md:justify-start">
                {modelData.colors.map((colorItem) => {
                  const isActive = currentColor.id === colorItem.id;
                  const backgroundValue =
                    colorItem.color.background || "#cccccc";
                  const outlineValue =
                    colorItem.color.outline || backgroundValue;
                  const shadowValue = colorItem.color.shadow || backgroundValue;

                  return (
                    <button
                      key={colorItem.id}
                      onClick={() => colorChange(colorItem.id)}
                      className={`relative  w-fit group transition-transform duration-200 ${
                        isActive ? "scale-[1.3] z-10" : ""
                      } `}
                      aria-label={colorItem.name || ""}>
                      {/* Main color circle */}
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${backgroundValue} 50%, ${shadowValue} 50%)`,
                          border: isActive
                            ? `2px solid ${outlineValue}`
                            : "none",
                        }}
                      />

                      {/* Inactive state border */}
                      {!isActive && (
                        <div
                          className="absolute -inset-[3px] rounded-full border"
                          style={{ borderColor: outlineValue }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col gap-10 h-full">
            <div>
              <h4 className="font-normal text-gray-600 mb-4">
                Modelo {modelData.modelo}
              </h4>
              <h2 className="font-semibold text-[#04141F]">
                Recibimos tu auto en parte de pago
              </h2>
              <hr className="border-t border-[#05141F] mt-3" />
            </div>
            <p className="text-gray-700">
              Vamos a pedirte una serie de datos sobre tu auto actual{" "}
              <strong>
                para que puedas entregarlo como parte de pago de tu vehículo Kia
                nuevo.
              </strong>
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <FormDropdown
                    name="marca"
                    value={step4Data.marca}
                    onChange={(e) =>
                      setStep4Data({ ...step4Data, marca: e.target.value })
                    }
                    options={marcas}
                    placeholder="Seleccioná tu marca"
                  />
                </div>

                <div>
                  <TextField
                    name="modelo"
                    value={step4Data.modelo}
                    onChange={(e) =>
                      setStep4Data({ ...step4Data, modelo: e.target.value })
                    }
                    placeholder="Modelo"
                  />
                </div>

                <div>
                  <FormDropdown
                    name="año"
                    value={step4Data.año}
                    onChange={(e) =>
                      setStep4Data({ ...step4Data, año: e.target.value })
                    }
                    options={años}
                    placeholder="Ingresá el año"
                  />
                </div>

                <div>
                  <FormDropdown
                    name="kilometraje"
                    value={step4Data.kilometraje}
                    onChange={(e) =>
                      setStep4Data({
                        ...step4Data,
                        kilometraje: e.target.value,
                      })
                    }
                    options={kilometrajes}
                    placeholder="Marcá el kilometraje"
                  />
                </div>

                <div className="md:col-span-2">
                  <FormDropdown
                    name="estado"
                    value={step4Data.estado}
                    onChange={(e) =>
                      setStep4Data({ ...step4Data, estado: e.target.value })
                    }
                    options={estados}
                    placeholder="Mencioná el estado en que se encuentra el vehículo"
                  />
                </div>
              </div>
              <div className="flex md:justify-end">
                <PillButton
                  title="Saltar paso"
                  onClick={() => setCurrentStep(5)}
                  type="secondary"
                  size="large"
                  className="w-full md:w-fit"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex flex-col gap-10 h-full">
            <div>
              <h4 className="font-normal text-gray-600 mb-5">
                Modelo {modelData.modelo}
              </h4>
              <h2 className="font-semibold text-[#04141F] mb-3">
                Ingresá tus datos
              </h2>
              <hr className="border-t border-[#05141F]" />
            </div>
            <p className="text-gray-700">
              Vamos a pedirte una serie de datos sobre tu información personal
              para poder contactarte.
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <TextField
                  name="nombre"
                  value={step5Data.nombre}
                  onChange={(e) =>
                    setStep5Data({ ...step5Data, nombre: e.target.value })
                  }
                  placeholder="Nombre"
                />

                <TextField
                  name="apellido"
                  value={step5Data.apellido}
                  onChange={(e) =>
                    setStep5Data({ ...step5Data, apellido: e.target.value })
                  }
                  placeholder="Apellido"
                />

                <TextField
                  name="email"
                  value={step5Data.email}
                  onChange={(e) =>
                    setStep5Data({ ...step5Data, email: e.target.value })
                  }
                  placeholder="Email"
                />

                <TextField
                  name="telefono"
                  value={step5Data.telefono}
                  onChange={(e) =>
                    setStep5Data({
                      ...step5Data,
                      telefono: e.target.value,
                    })
                  }
                  placeholder="Teléfono"
                />

                <div className="md:col-span-2">
                  <FormDropdown
                    name="concesionario"
                    value={step5Data.concesionario}
                    onChange={(e) =>
                      setStep5Data({
                        ...step5Data,
                        concesionario: e.target.value,
                      })
                    }
                    options={concesionarios}
                    placeholder="Buscá tu concesionario"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full items-center flex-row">
              <Checkbox
                checked={step5Data.checkbox}
                onChange={() =>
                  setStep5Data({
                    ...step5Data,
                    checkbox: !step5Data.checkbox,
                  })
                }
              />
              <h6 className="text-[#05141F] font-regular">
                He leído y acepto los{" "}
                <a
                  href="#"
                  className="text-[#05141F] underline underline-offset-4">
                  Términos y Condiciones
                </a>
              </h6>
            </div>
          </div>
        );

      default:
        return <div>Step not found</div>;
    }
  };

  return <div className="h-full">{renderStepContent()}</div>;
};

export default Step;
