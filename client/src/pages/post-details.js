import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const result = await axios.get(`http://localhost:3001/posts/${postId}`);
				setPost(result.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPost();
	}, []);

	return (
		<div>
			<h1> Details </h1>
			{post ? (
				<>
					<div>
						<h2>{post.title}</h2>
						<button> Delete </button>
					</div>
					<div>
						<p>{post.theme}</p>
					</div>
					<img src={post.imageUrl} alt={post.title} />
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};