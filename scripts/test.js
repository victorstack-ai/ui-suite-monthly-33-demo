import { run } from "../tests/utils.test.js";

try {
  run();
  console.log("Tests OK");
} catch (error) {
  console.error("Tests failed:");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
