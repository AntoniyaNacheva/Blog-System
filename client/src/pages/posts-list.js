import React, { useEffect, useState } from "react";
import axios from "axios";

export const PostsList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {

		const fetchPosts = async () => {
			try {
				const result = await axios.get("http://localhost:3001/posts");
				setPosts(result.data);
				console.log(posts);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPosts();
	}, []);

	return (
		<div>
			<h1> Posts List</h1>
			<ul>
				{posts.map((post) => (
					<li key={post._id}>
						<div>
							<h2>{post.title}</h2>
						</div>
						<div>
							<p>{post.theme}</p>
						</div>
						<img src={post.imageUrl} alt={post.title} />
					</li>
				))}
			</ul>
		</div>
	)
};