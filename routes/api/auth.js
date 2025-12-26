import express from "express";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const auth = express();

auth.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User has been created" });
  } catch (error) {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

auth.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "You are now loged in", token });
  } catch (error) {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

auth.post("/logout", async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

export default auth;
