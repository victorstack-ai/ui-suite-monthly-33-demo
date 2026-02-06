export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function pickPalette(palettes, seed) {
  if (!Array.isArray(palettes) || palettes.length === 0) {
    throw new Error("Palettes array required");
  }

  const index = clamp(seed, 0, palettes.length - 1);
  return palettes[index];
}
