const fs = require('fs');
const path = require('path');

const FILE_URL = path.join(__dirname, '../database/users.json');

const readFile = () => {
    return JSON.parse(fs.readFileSync(FILE_URL, 'utf8'));
};

const writeFile = (obj) => {
    const content = readFile();
    content.push(obj);
    fs.writeFileSync(FILE_URL, JSON.stringify(content), 'utf8');
};
module.exports = { readFile, writeFile }