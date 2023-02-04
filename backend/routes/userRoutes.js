import express from "express"
import {
    getUser,
    getUserFollowers,
    getUserFollowings,
    removeFollower,
    addFollowing,
} from "../controllers/userController.js"
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

// READ
router.get("/:id", verifyToken, getUser)
router.get("/:id/followers", verifyToken, getUserFollowers)
router.get("/:id/followings", verifyToken, getUserFollowings)
// UPDATE
router.patch("/:id/:followerId", verifyToken, removeFollower)
router.patch("/:id/:followingId", verifyToken, addFollowing)

export default router