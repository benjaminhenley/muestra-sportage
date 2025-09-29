import { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import Step from "../components/ui/Step";
import CarImages from "../components/CarImages";
import Navbar from "../components/Navbar";
import CompletedFormBanner from "../components/ui/CompletedFormBanner";
import { autos } from "../data/autos";
import SquareButton from "../components/ui/SquareButton";
import { data } from "react-router-dom";

export default function Form({ modelId }) {
  const [currentStep, setCurrentStep] = useState(
    modelId === "sportage" ? 3 : 2
  );
  const [model, setModel] = useState(autos.find((auto) => auto.id === modelId));
  const [currentColor, setCurrentColor] = useState(model.colors[0]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState("");
  const [step2Data, setStep2Data] = useState({});
  const [step4Data, setStep4Data] = useState({});
  const [step5Data, setStep5Data] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setModel(autos.find((auto) => auto.id === modelId));
    setCurrentColor(model.colors[0]);
  }, [modelId]);

  const handleColorChange = (color) => {
    setCurrentColor(model.colors.find((c) => c.id === color));
  };

  const handleSubmit = async () => {
    const formData = {
      nombre: step5Data.nombre ?? "",
      apellido: step5Data.apellido ?? "",
      fecha_nacimiento: new Date().toISOString().split("T")[0],
      celular: step5Data.telefono ?? "",
      mail: step5Data.email ?? "",
      ubicacion: step5Data.provinciaNombre ?? "",
      newsletter: 0,
      contacto: 1,
      origen: "Sportage-Website",
      tipoLanding: "modelo",
      modeloAuto: "Sportage",

      informacionExtra: {
        entregaAuto: step4Data.modelo ? "si" : "no",
        marcaAuto: step4Data.marca ?? "",
        modeloAuto: step4Data.modelo ?? "",
        anioAuto: Number(step4Data.año) ?? 0,
        kilometrajeAutoEntrega: step4Data.kilometraje ?? "",
        estadoAutoEntrega: step4Data.estado ?? "",
        preferenciaColorKia: [
          model?.modelo,
          step2Data?.version,
          currentColor?.name,
        ]
          .filter(Boolean)
          .join(" "),
      },
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://fusio.encender-dev.online/public/kia/lead-reserva",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API response:", result);

      setName(step5Data.nombre);
      setIsCompleted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setIsCompleted(false);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const isValid = () => {
    switch (currentStep) {
      case 2:
        return step2Data.version;
      case 4:
        return (
          step4Data.marca &&
          step4Data.modelo &&
          step4Data.año &&
          step4Data.kilometraje &&
          step4Data.estado
        );
      case 5:
        return (
          step5Data.nombre &&
          step5Data.apellido &&
          step5Data.email &&
          step5Data.telefono &&
          step5Data.provincia &&
          step5Data.checkbox
        );
      default:
        return true;
    }
  };

  // console.log("step5Data:", step5Data);
  return (
    <section className="w-full  min-h-screen">
      <Navbar black />
      <div className="bg-white px-4 md:px-20">
        {/* Main Content */}
        <main className="container mx-auto md:px-4 py-10 md:py-20">
          {/* Page Title */}
          <h1 className="font-bold mb-8">Personalizá tu Nueva Spotage</h1>

          {/* Stepper */}
          <Stepper
            currentStep={isCompleted ? 6 : currentStep}
            changeColor={handleColorChange}
          />

          {/* Content Area */}
          {isCompleted ? (
            <div className="mt-16 flex justify-center mb-20">
              <CompletedFormBanner
                name={name}
                setIsCompleted={setIsCompleted}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 md:mt-16 md:mb-20">
              {/* Left Side - Step Content */}
              <div>
                <Step
                  setStep2Data={setStep2Data}
                  setStep4Data={setStep4Data}
                  setStep5Data={setStep5Data}
                  step2Data={step2Data}
                  step4Data={step4Data}
                  step5Data={step5Data}
                  modelData={model}
                  currentStep={currentStep}
                  currentColor={currentColor}
                  colorChange={handleColorChange}
                  setCurrentStep={setCurrentStep}
                />
                {/* Action Buttons */}
                <div className="hidden md:flex justify-start gap-2.5 mt-10  items-end">
                  <SquareButton
                    onClick={handleCancel}
                    type="secondary"
                    disabled={currentStep === 2}>
                    Cancelar
                  </SquareButton>
                  <SquareButton
                    disabled={!isValid() || isSubmitting}
                    onClick={
                      currentStep === 5
                        ? handleSubmit
                        : () => setCurrentStep((prev) => prev + 1)
                    }
                    className={!isValid() ? "opacity-50" : ""}>
                    Confirmar
                  </SquareButton>
                </div>
              </div>

              {/* Right Side - Car Images */}
              <div>
                <CarImages currentColor={currentColor} modelId={modelId} />
                {/* Action Buttons */}
                <div className="flex flex-col md:hidden justify-start items-end gap-2.5 mt-8 md:mt-10">
                  <SquareButton
                    onClick={handleCancel}
                    type="secondary"
                    className="w-full">
                    Cancelar
                  </SquareButton>
                  <SquareButton
                    disabled={!isValid() || isSubmitting}
                    onClick={
                      currentStep === 5
                        ? handleSubmit
                        : () => setCurrentStep((prev) => prev + 1)
                    }
                    className={!isValid() ? "opacity-50 w-full" : "w-full"}>
                    Confirmar
                  </SquareButton>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
