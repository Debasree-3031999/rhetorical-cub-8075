import { User } from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const newUser = new User({ ...req.body });
  try {
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.ACCESS_TOKEN);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(newUser);
  } catch (err) {
    console.log(err);
  }
  // }
};

export const sendOtp = (req, res) => {
  const { mobileNumber } = req.body;
  const otp = Math.floor(Math.random() * 10000);
  const message = `Your OTP is ${otp}`;
  res.status(200).json({
    message: `OTP Sent successfully on ${mobileNumber}`,
    message,
  });
};

export const verifyOtp = async (req, res) => {
  const FindUser = await User.findOne({ mobileNumber: req.body.mobileNumber });
  if (FindUser) {
    const token = jwt.sign({ id: FindUser._id }, process.env.ACCESS_TOKEN);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(FindUser);
  } else {
    res.status(200).json({
      message: "User not found",
    });
  }
};

export const getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!users) {
      res.status(404).json({
        message: "No users found",
      });
    } else {
      res.status(200).json({
        message: "Users found successfully",
        users,
      });
    }
  });
};
