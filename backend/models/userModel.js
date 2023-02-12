import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 50,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 50,
		},
		lastName: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 50,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minlength: 5,
			maxlength: 100,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		phoneNumber: {
			type: String,
			required: true,
			minlength: 10,
			maxlength: 10,
		},
		picturePath: {
			type: String,
			default: "",
		},
		followers: {
			type: [String],		// userName
			default: [],
		},
		followings: {
			type: [String],		// userName
			default: [],
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', UserSchema)

export default User