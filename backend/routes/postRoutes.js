import express from 'express'
import {
    getFeedPosts,
    getUserPosts,
    upvotePost,
    downvotePost
} from "../controllers/postController.js"
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

// READ
router.get("/", verifyToken, getFeedPosts)
router.get("/:userId/posts", verifyToken, getUserPosts)

// UPDATE
router.patch("/:id/upvote", verifyToken, upvotePost)
router.patch("/:id/downvote", verifyToken, downvotePost)

export default router