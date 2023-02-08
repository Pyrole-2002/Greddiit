import mongoose from "mongoose"

export const PostSchema = new mongoose.Schema(
	{
		postId: {
			type: Number,
			required: true,
			unique: true,
		},
		content: {
			type: String,
			required: true,
		},
		postIn: {
			type: Number,   // sgId
			required: true,
		},
		postBy: {
			type: String,	// userName
			required: true,
		},
		upvotes: {
			type: Number,
			default: 0,
			required: true,
		},
		downvotes: {
			type: Number,
			default: 0,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Post = mongoose.model("Post", PostSchema)

export default Post
