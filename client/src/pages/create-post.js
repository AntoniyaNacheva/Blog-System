import { useState } from "react";
import axios from "axios";

export const CreatePost = () => {

	const [post, setPost] = useState({
		title: "",
		theme: "",
		imageUrl: "",
		author: 0
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setPost({ ...post, [name]: value });
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post("http://localhost:3001/posts", post);
			alert("Post created!");
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="create-post">
			<h2> Create Post</h2>
			<form onSubmit={onSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					onChange={handleChange}
				/>
				<label htmlFor="theme">Theme</label>
				<input
					type="text"
					id="theme"
					name="theme"
					onChange={handleChange}
				/>
				<label htmlFor="imageUrl">Image URL</label>
				<input
					type="text"
					id="imageUrl"
					name="imageUrl"
					onChange={handleChange}
				/>
				<button type="submit">Create Post</button>
			</form>
		</div>
	);
};