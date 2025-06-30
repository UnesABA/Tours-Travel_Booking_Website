import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// User registration
export const register = async (req, res) => {
  try {
    //hashing password 
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    })

    await newUser.save()

    return res.status(200).json({
      success: true,
      message: "User registered successfully.",
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to register user. Please try again later.",
    })
  }
}

// User login
export const login = async (req, res) => {
  try {
  } catch (error) {}
}
