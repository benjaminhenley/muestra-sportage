const marcas = [
  { value: "Kia", label: "Kia" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "Ford", label: "Ford" },
  { value: "Toyota", label: "Toyota" },
  { value: "Honda", label: "Honda" },
];

const años = Array.from({ length: 20 }, (_, i) => 2024 - i).map((year) => ({
  value: year.toString(),
  label: year.toString(),
}));

const kilometrajes = [
  { value: "0-10000", label: "0 - 10,000 km" },
  { value: "10000-30000", label: "10,000 - 30,000 km" },
  { value: "30000-50000", label: "30,000 - 50,000 km" },
  { value: "50000-80000", label: "50,000 - 80,000 km" },
  { value: "80000-120000", label: "80,000 - 120,000 km" },
  { value: "120000+", label: "Más de 120,000 km" },
];

const estados = [
  { value: "Excelente", label: "Excelente" },
  { value: "Muy bueno", label: "Muy bueno" },
  { value: "Bueno", label: "Bueno" },
  { value: "Regular", label: "Regular" },
  { value: "Malo", label: "Malo" },
];

const concesionarios = [
  { value: "Concesionario 1", label: "Concesionario 1" },
  { value: "Concesionario 2", label: "Concesionario 2" },
  { value: "Concesionario 3", label: "Concesionario 3" },
];

export { estados, kilometrajes, años, marcas, concesionarios };
