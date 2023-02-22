import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"



// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id: id }, process.env.JWT_SECRET)
}



// REGISTER USER
// @route POST /auth/register
export const register = async (req, res) => {
	try {
		const {
			userName,
			firstName,
			lastName,
			email,
			password,
			phoneNumber,
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
		})

		const savedUser = await newUser.save()
		res.status(201).json({
				userName: savedUser.userName,
				firstName: savedUser.firstName,
				lastName: savedUser.lastName,
				email: savedUser.email,
				phoneNumber: savedUser.phoneNumber,
				token: generateToken(savedUser._id),
		})
	}
	catch (err) {
		res.status(500).json({
			Error: `Error: ${err.message}`
		})
	}
}



// LOGIN USER
// @route POST /auth/login
export const login = async (req, res) => {
	try {
		const {
			userName,
			password
		} = req.body

		const user = await User.findOne({userName})

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

		delete user.password
		res.status(200).json({
			userName: user.userName,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			token: generateToken(user._id),
		})
	}
	catch (err) {
		res.status(500).json({
			error: `${err.message}`
		})
	}
}