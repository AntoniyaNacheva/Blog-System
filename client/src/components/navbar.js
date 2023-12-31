import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const [cookies, setCookies] = useCookies(["access_token"]);
	const navigate = useNavigate();

	const logout = () => {
		setCookies("access_token", "", { sameSite: "None", secure: true });
		window.localStorage.removeItem("userID");
		navigate("/auth");
	}

	return (
		<div className="navbar">
			<Link to="/"> Home</Link>
			<Link to="/posts-list"> Posts List</Link>
			<Link to="/users-list"> Users List</Link>

			{!cookies.access_token ? (
				<Link to="/auth"> Login/Register</Link>
			) : (
				<>
					<Link to="/create-post"> Create Post</Link>
					<button onClick={logout}> Logout</button>
				</>
			)}
		</div>
	);
};