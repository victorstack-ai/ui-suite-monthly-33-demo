import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if ([".js", ".css", ".html", ".md"].includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
}

walk(root);

const errors = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  lines.forEach((line, index) => {
    if (line.includes("\t")) {
      errors.push(`${file}:${index + 1} contains a tab`);
    }
    if (line.endsWith(" ")) {
      errors.push(`${file}:${index + 1} has trailing spaces`);
    }
  });
}

if (errors.length > 0) {
  console.error("Lint failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Lint OK (${files.length} files checked)`);
