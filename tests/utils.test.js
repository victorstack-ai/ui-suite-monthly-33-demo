import assert from "assert";
import { clamp, pickPalette } from "../js/utils.js";

export function run() {
  assert.strictEqual(clamp(2, 0, 4), 2);
  assert.strictEqual(clamp(-2, 0, 4), 0);
  assert.strictEqual(clamp(8, 0, 4), 4);

  const palettes = [{ name: "a" }, { name: "b" }, { name: "c" }];
  assert.deepStrictEqual(pickPalette(palettes, 1), palettes[1]);
  assert.deepStrictEqual(pickPalette(palettes, 99), palettes[2]);
}
