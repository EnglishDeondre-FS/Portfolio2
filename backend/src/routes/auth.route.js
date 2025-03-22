import Router from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../db/schema.js";

const authRouter = new Router();

authRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", state: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", state: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Logged In.",
      state: true,
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", state: false });
  }
});

authRouter.post("/signup", async (req, res) => {
  try {
    const {email, password} = req.body;

    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({ message: "User already exists", state: false });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({ email, hashedPassword });

    const token = jwt.sign({id: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr'});

    const defaultUserSettings = {
      fontSize: '4rem',
      fontColor: '#ffffff', 
    };

    res.status(201).json({
      message: "User Logged In.",
      state: true,
      token,
      user: { id: user._id, email: user.email, defaultUserSettings},
    });
  } catch(erorr) {
    res.status(500).json({ message: `${erorr}`, state: false });
  }
});

export default authRouter;
