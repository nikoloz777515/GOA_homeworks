const fs = require("fs");

function readFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return data ? JSON.parse(data) : [];
}

function writeFile(newData, filePath) {
  const existing = readFile(filePath);
  existing.push(newData);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
}

module.exports = { readFile, writeFile };
