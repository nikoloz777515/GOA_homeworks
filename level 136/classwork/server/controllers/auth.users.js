const path = require("path");
const { readFile, writeFile } = require("../utils/file");

const USERS_FILE = path.join(__dirname, "../database/users.json");

const register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ message: "All fields required" });

  const users = readFile(USERS_FILE);
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });

  const user = { id: Date.now(), username, email, password };
  writeFile(user, USERS_FILE);
  res.status(201).json({ user });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const users = readFile(USERS_FILE);
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  res.json({ user });
};

module.exports = { register, login };
