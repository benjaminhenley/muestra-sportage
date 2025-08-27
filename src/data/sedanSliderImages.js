// Azure Blue Images (8 positions)
import SedanAzure1 from "../assets/images/slider/sedan/sedan-azure-1.webp";
import SedanAzure2 from "../assets/images/slider/sedan/sedan-azure-2.webp";
import SedanAzure3 from "../assets/images/slider/sedan/sedan-azure-3.webp";
import SedanAzure4 from "../assets/images/slider/sedan/sedan-azure-4.webp";
import SedanAzure5 from "../assets/images/slider/sedan/sedan-azure-5.webp";
import SedanAzure6 from "../assets/images/slider/sedan/sedan-azure-6.webp";
import SedanAzure7 from "../assets/images/slider/sedan/sedan-azure-7.webp";
import SedanAzure8 from "../assets/images/slider/sedan/sedan-azure-8.webp";

// Black Images (8 positions)
import SedanAurora1 from "../assets/images/slider/sedan/sedan-aurora-1.webp";
import SedanAurora2 from "../assets/images/slider/sedan/sedan-aurora-2.webp";
import SedanAurora3 from "../assets/images/slider/sedan/sedan-aurora-3.webp";
import SedanAurora4 from "../assets/images/slider/sedan/sedan-aurora-4.webp";
import SedanAurora5 from "../assets/images/slider/sedan/sedan-aurora-5.webp";
import SedanAurora6 from "../assets/images/slider/sedan/sedan-aurora-6.webp";
import SedanAurora7 from "../assets/images/slider/sedan/sedan-aurora-7.webp";
import SedanAurora8 from "../assets/images/slider/sedan/sedan-aurora-8.webp";

// Gray Images (8 positions)
import SedanSilky1 from "../assets/images/slider/sedan/sedan-silky-1.webp";
import SedanSilky2 from "../assets/images/slider/sedan/sedan-silky-2.webp";
import SedanSilky3 from "../assets/images/slider/sedan/sedan-silky-3.webp";
import SedanSilky4 from "../assets/images/slider/sedan/sedan-silky-4.webp";
import SedanSilky5 from "../assets/images/slider/sedan/sedan-silky-5.webp";
import SedanSilky6 from "../assets/images/slider/sedan/sedan-silky-6.webp";
import SedanSilky7 from "../assets/images/slider/sedan/sedan-silky-7.webp";
import SedanSilky8 from "../assets/images/slider/sedan/sedan-silky-8.webp";

// Silver Images (8 positions)
import SedanSteel1 from "../assets/images/slider/sedan/sedan-steel-1.webp";
import SedanSteel2 from "../assets/images/slider/sedan/sedan-steel-2.webp";
import SedanSteel3 from "../assets/images/slider/sedan/sedan-steel-3.webp";
import SedanSteel4 from "../assets/images/slider/sedan/sedan-steel-4.webp";
import SedanSteel5 from "../assets/images/slider/sedan/sedan-steel-5.webp";
import SedanSteel6 from "../assets/images/slider/sedan/sedan-steel-6.webp";
import SedanSteel7 from "../assets/images/slider/sedan/sedan-steel-7.webp";
import SedanSteel8 from "../assets/images/slider/sedan/sedan-steel-8.webp";

// White Images (8 positions)
import SedanSnow1 from "../assets/images/slider/sedan/sedan-snow-1.webp";
import SedanSnow2 from "../assets/images/slider/sedan/sedan-snow-2.webp";
import SedanSnow3 from "../assets/images/slider/sedan/sedan-snow-3.webp";
import SedanSnow4 from "../assets/images/slider/sedan/sedan-snow-4.webp";
import SedanSnow5 from "../assets/images/slider/sedan/sedan-snow-5.webp";
import SedanSnow6 from "../assets/images/slider/sedan/sedan-snow-6.webp";
import SedanSnow7 from "../assets/images/slider/sedan/sedan-snow-7.webp";
import SedanSnow8 from "../assets/images/slider/sedan/sedan-snow-8.webp";

export const carImages = {
  sedan: {
    azure: [
      SedanAzure1,
      SedanAzure2,
      SedanAzure3,
      SedanAzure4,
      SedanAzure5,
      SedanAzure6,
      SedanAzure7,
      SedanAzure8,
    ],
    aurora: [
      SedanAurora1,
      SedanAurora2,
      SedanAurora3,
      SedanAurora4,
      SedanAurora5,
      SedanAurora6,
      SedanAurora7,
      SedanAurora8,
    ],
    silky: [
      SedanSilky1,
      SedanSilky2,
      SedanSilky3,
      SedanSilky4,
      SedanSilky5,
      SedanSilky6,
      SedanSilky7,
      SedanSilky8,
    ],
    steel: [
      SedanSteel1,
      SedanSteel2,
      SedanSteel3,
      SedanSteel4,
      SedanSteel5,
      SedanSteel6,
      SedanSteel7,
      SedanSteel8,
    ],
    snow: [
      SedanSnow1,
      SedanSnow2,
      SedanSnow3,
      SedanSnow4,
      SedanSnow5,
      SedanSnow6,
      SedanSnow7,
      SedanSnow8,
    ],
  },
};

export const colorScheme = {
  sedan: {
    azure: {
      outline: "#0B293B",
      shadow: "#0F3A54",
      background: "#124463",
    },
    aurora: {
      outline: "#05141F",
      shadow: "#05141F",
      background: "#1B171B",
    },
    silky: {
      outline: "#817F7F",
      shadow: "#A6A4A4",
      background: "#B8B6B6",
    },
    steel: {
      outline: "#4C4C4C",
      shadow: "#6B6B6B",
      background: "#7E7E7E",
    },
    snow: {
      outline: "#D6D6D6",
      shadow: "#EFEFEF",
      background: "#F6F6F6",
    },
  },
};

export const sedanImagesByColor = [
  {
    id: "azure",
    name: "Azure Blue",
    images: carImages.sedan.azure,
    color: colorScheme.sedan.azure,
  },
  {
    id: "aurora",
    name: "Aurora",
    images: carImages.sedan.aurora,
    color: colorScheme.sedan.aurora,
  },
  {
    id: "steel",
    name: "Steel",
    images: carImages.sedan.steel,
    color: colorScheme.sedan.steel,
  },
  {
    id: "silky",
    name: "Silky",
    images: carImages.sedan.silky,
    color: colorScheme.sedan.silky,
  },
  {
    id: "snow",
    name: "Snow",
    images: carImages.sedan.snow,
    color: colorScheme.sedan.snow,
  },
];
