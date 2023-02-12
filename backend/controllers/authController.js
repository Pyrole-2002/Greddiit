import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"



// REGISTER USER
export const register = async (req, res) => {
    try {
        const {
            userName,
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            // picturePath,
        } = req.body

        if (!userName || !firstName || !lastName || !email || !password || !phoneNumber) {
            res.status(400).json({
                Error: "Make sure the required fields are filled"
            })
        }

        // Check if the user already exists
        const existingUser = await User.findOne({
            $or: [
                { userName: userName },
                { email: email }
            ]
        })
        if (existingUser) {
            res.status(400).json({
                Error: "User already exists"
            })
        }

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            userName,
            firstName,
            lastName,
            email,
            password: passwordHash,
            phoneNumber,
            // picturePath,
        })

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }
    catch (err) {
        res.status(500).json({
            Error: `Error: ${err.message}`
        })
    }
}



// LOGIN USER
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({
                msg: "User Does Not Exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                msg: "Invalid Credentials"
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        delete user.password
        res.status(200).json({ token, user })
    }
    catch (err) {
        res.status(500).json({
            error: `${err.message}`
        })
    }
}