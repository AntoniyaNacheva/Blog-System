import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/"> Home</Link>
			<Link to="/create-post"> Create Post</Link>
			<Link to="/posts-list"> Posts List</Link>
			<Link to="/auth"> Login/Register</Link>
		</div>
	);
};