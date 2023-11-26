import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserId } from "../hooks/getUserId";
import axios from "axios";

export const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState();
	const userID = getUserId();

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
	}, [postId]);

	const navigate = useNavigate();

	const deletePost = async () => {
		try {
			await axios.delete(`http://localhost:3001/posts/${postId}`);
			alert("Post deleted successfully!");
			navigate("/posts-list");
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="details">
			<h1> Details </h1>
			{post ? (
				<>
					<div>
						<h2>{post.title}</h2>
						{userID === post.author && (
							<div>
								<button onClick={deletePost}> Delete </button>
							</div>
						)}
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