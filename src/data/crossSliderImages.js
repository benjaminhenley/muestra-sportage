// Azure Blue Images (8 positions)
import CrossAzure1 from "../assets/images/slider/cross/cross-azure-1.webp";
import CrossAzure2 from "../assets/images/slider/cross/cross-azure-2.webp";
import CrossAzure3 from "../assets/images/slider/cross/cross-azure-3.webp";
import CrossAzure4 from "../assets/images/slider/cross/cross-azure-4.webp";
import CrossAzure5 from "../assets/images/slider/cross/cross-azure-5.webp";
import CrossAzure6 from "../assets/images/slider/cross/cross-azure-6.webp";
import CrossAzure7 from "../assets/images/slider/cross/cross-azure-7.webp";
import CrossAzure8 from "../assets/images/slider/cross/cross-azure-8.webp";

// Black Images (8 positions)
import CrossAurora1 from "../assets/images/slider/cross/cross-aurora-1.webp";
import CrossAurora2 from "../assets/images/slider/cross/cross-aurora-2.webp";
import CrossAurora3 from "../assets/images/slider/cross/cross-aurora-3.webp";
import CrossAurora4 from "../assets/images/slider/cross/cross-aurora-4.webp";
import CrossAurora5 from "../assets/images/slider/cross/cross-aurora-5.webp";
import CrossAurora6 from "../assets/images/slider/cross/cross-aurora-6.webp";
import CrossAurora7 from "../assets/images/slider/cross/cross-aurora-7.webp";
import CrossAurora8 from "../assets/images/slider/cross/cross-aurora-8.webp";

// Gray Images (8 positions)
import CrossSilky1 from "../assets/images/slider/cross/cross-silky-1.webp";
import CrossSilky2 from "../assets/images/slider/cross/cross-silky-2.webp";
import CrossSilky3 from "../assets/images/slider/cross/cross-silky-3.webp";
import CrossSilky4 from "../assets/images/slider/cross/cross-silky-4.webp";
import CrossSilky5 from "../assets/images/slider/cross/cross-silky-5.webp";
import CrossSilky6 from "../assets/images/slider/cross/cross-silky-6.webp";
import CrossSilky7 from "../assets/images/slider/cross/cross-silky-7.webp";
import CrossSilky8 from "../assets/images/slider/cross/cross-silky-8.webp";

// Silver Images (8 positions)
import CrossSteel1 from "../assets/images/slider/cross/cross-steel-1.webp";
import CrossSteel2 from "../assets/images/slider/cross/cross-steel-2.webp";
import CrossSteel3 from "../assets/images/slider/cross/cross-steel-3.webp";
import CrossSteel4 from "../assets/images/slider/cross/cross-steel-4.webp";
import CrossSteel5 from "../assets/images/slider/cross/cross-steel-5.webp";
import CrossSteel6 from "../assets/images/slider/cross/cross-steel-6.webp";
import CrossSteel7 from "../assets/images/slider/cross/cross-steel-7.webp";
import CrossSteel8 from "../assets/images/slider/cross/cross-steel-8.webp";

// White Images (8 positions)
import CrossSnow1 from "../assets/images/slider/cross/cross-snow-1.webp";
import CrossSnow2 from "../assets/images/slider/cross/cross-snow-2.webp";
import CrossSnow3 from "../assets/images/slider/cross/cross-snow-3.webp";
import CrossSnow4 from "../assets/images/slider/cross/cross-snow-4.webp";
import CrossSnow5 from "../assets/images/slider/cross/cross-snow-5.webp";
import CrossSnow6 from "../assets/images/slider/cross/cross-snow-6.webp";
import CrossSnow7 from "../assets/images/slider/cross/cross-snow-7.webp";
import CrossSnow8 from "../assets/images/slider/cross/cross-snow-8.webp";

export const carImages = {
  cross: {
    azure: [
      CrossAzure1,
      CrossAzure2,
      CrossAzure3,
      CrossAzure4,
      CrossAzure5,
      CrossAzure6,
      CrossAzure7,
      CrossAzure8,
    ],
    aurora: [
      CrossAurora1,
      CrossAurora2,
      CrossAurora3,
      CrossAurora4,
      CrossAurora5,
      CrossAurora6,
      CrossAurora7,
      CrossAurora8,
    ],
    silky: [
      CrossSilky1,
      CrossSilky2,
      CrossSilky3,
      CrossSilky4,
      CrossSilky5,
      CrossSilky6,
      CrossSilky7,
      CrossSilky8,
    ],
    steel: [
      CrossSteel1,
      CrossSteel2,
      CrossSteel3,
      CrossSteel4,
      CrossSteel5,
      CrossSteel6,
      CrossSteel7,
      CrossSteel8,
    ],
    snow: [
      CrossSnow1,
      CrossSnow2,
      CrossSnow3,
      CrossSnow4,
      CrossSnow5,
      CrossSnow6,
      CrossSnow7,
      CrossSnow8,
    ],
  },
};

export const colorScheme = {
  cross: {
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

export const crossImagesByColor = [
  {
    id: "azure",
    name: "Azure Blue",
    images: carImages.cross.azure,
    color: colorScheme.cross.azure,
  },
  {
    id: "aurora",
    name: "Aurora Black Pearl",
    images: carImages.cross.aurora,
    color: colorScheme.cross.aurora,
  },
  {
    id: "steel",
    name: "Steel Gray",
    images: carImages.cross.steel,
    color: colorScheme.cross.steel,
  },
  {
    id: "silky",
    name: "Silky Silver",
    images: carImages.cross.silky,
    color: colorScheme.cross.silky,
  },
  {
    id: "snow",
    name: "Snow White Pearl",
    images: carImages.cross.snow,
    color: colorScheme.cross.snow,
  },
];
