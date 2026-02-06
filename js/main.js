import { pickPalette } from "./utils.js";

const palettes = [
  {
    name: "Solar Lime",
    accent: "#d1ff4b",
    accent2: "#ff6bd6",
    accent3: "#69d2ff",
  },
  {
    name: "Neon Coral",
    accent: "#ff8f6b",
    accent2: "#ffd86b",
    accent3: "#7ae6d4",
  },
  {
    name: "Violet Pulse",
    accent: "#b7a1ff",
    accent2: "#ff6bc2",
    accent3: "#6be2ff",
  },
  {
    name: "Citrus Wave",
    accent: "#f6ff7c",
    accent2: "#7cf4ff",
    accent3: "#ff7ce0",
  },
];

const shuffleButton = document.querySelector("#shuffle");
const accentLabel = document.querySelector("#accent-label");

function applyPalette(palette) {
  const root = document.documentElement;
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--accent-2", palette.accent2);
  root.style.setProperty("--accent-3", palette.accent3);
  accentLabel.textContent = palette.name;
}

if (shuffleButton) {
  shuffleButton.addEventListener("click", () => {
    const seed = Math.floor(Math.random() * palettes.length);
    const palette = pickPalette(palettes, seed);
    applyPalette(palette);
  });
}

applyPalette(palettes[0]);
