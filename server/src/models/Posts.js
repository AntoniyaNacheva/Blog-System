import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	title: { type: String, required: true },
	theme: { type: String, required: true },
	imageUrl: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	}
});

export const PostModel = mongoose.model("posts", PostSchema);
