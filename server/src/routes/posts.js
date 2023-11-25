import express from "express";
import { PostModel } from "../models/Posts.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const result = await PostModel.find({});
		res.json(result);
	} catch (err) {
		res.json(err);
	}
});

router.get("/:postId", async (req, res) => {
	try {
		const result = await PostModel.findById(req.params.postId);
		res.json(result);
	} catch (err) {
		res.json(err);
	}
});

router.post("/", verifyToken, async (req, res) => {
	const post = new PostModel(req.body);

	try {
		await post.save();
		res.json(post);
	} catch (err) {
		res.json(err);
	}
});

router.delete("/:postId", async (req, res) => {
	try {
		const post = await PostModel.findByIdAndDelete(req.params.postId);
		res.json({ message: "Post deleted successfully!" })
	} catch (err) {
		res.json(err);
	}
})

export { router as postRouter };