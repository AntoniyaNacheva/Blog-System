import express from "express";
import mongoose from "mongoose";
import { PostModel } from "../models/Posts.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const result = await PostModel.find({});
		res.json.result;
	} catch (err) {
		res.json(err);
	}
});

router.post("/", async (req, res) => {
	const post = new PostModel(req.body);

	try {
		await post.save();
		res.json.post;
	} catch (err) {
		res.json(err);
	}
});


export { router as postRouter };