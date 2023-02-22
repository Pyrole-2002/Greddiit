import User from "../models/userModel.js"



// READ
export const getUser = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)
		res.status(200).json(user)
	}
	catch (err) {
		res.status(404).json({
			message: `${err.message}`
		})
	}
}

export const getUserFollowers = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)
	
		const followers = await Promise.all(
			user.followers.map((id) => User.findById(id))
		)
		const formattedFollowers = followers.map(
			({
				_id,
				firstName,
				lastName,
			}) => {
				return {
					_id,
					firstName,
					lastName,
				}
			}
		)
		res.status(200).json(formattedFollowers)
	}
	catch (err) {
		res.status(404).json({
            message: `${err.message}`,
        })
	}
}

export const getUserFollowings = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)
	
		const followings = await Promise.all(
			user.followings.map((id) => User.findById(id))
		)
		const formattedFollowings = followings.map(
			({
				_id,
				firstName,
				lastName,
			}) => {
				return {
					_id,
					firstName,
					lastName,
				}
			}
		)
		res.status(200).json(formattedFollowings)
	}
	catch (err) {
		res.status(404).json({
            message: `${err.message}`,
        })
	}
}



// UPDATE
export const removeFollower = async (req, res) => {
	try {
		const {
			id,
			followerId
		} = req.params
		const user = await User.findById(id)
		const follower = await User.findById(followerId)

		if (user.followers.includes(followerId)) {
			user.followers = user.followers.filter((id) => id !== followerId)
			follower.followings = follower.followings.filter((id) => id !== id)
		}

		await user.save()
		await follower.save()

		const followers = await Promise.all(
            user.followers.map((id) => User.findById(id))
        )
        const formattedFollowers = followers.map(
            ({
				_id,
				firstName,
				lastName,
			}) => {
                return {
                    _id,
                    firstName,
                    lastName,
                }
            }
        )
		res.status(200).json(formattedFollowers)
	}
	catch (err) {
		res.status(404).json({
			message: `${err.message}`
		})
	}
}

export const addFollowing = async (req, res) => {
	try {
		const {
			id,
			followingId
		} = req.params
		const user = await User.findById(id)
		const following = await User.findById(followingId)

		if (!user.followings.includes(followingId)) {
			user.followings.push(followingId)
			following.followers.push(id)
		}

		await user.save()
		await following.save()

		const followings = await Promise.all(
            user.followings.map((id) => User.findById(id))
        )
        const formattedFollowings = followings.map(
            ({
				_id,
				firstName,
				lastName,
			}) => {
                return {
                    _id,
                    firstName,
                    lastName,
                }
            }
        )
		res.status(200).json(formattedFollowings)
	}
	catch (err) {
		res.status(404).json({
			message: `${err.message}`
		})
	}
}