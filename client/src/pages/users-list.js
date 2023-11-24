import React, { useEffect, useState } from "react";
import axios from "axios";

export const UsersList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {

		const fetchUsers = async () => {
			try {
				const result = await axios.get("http://localhost:3001/users");
				setUsers(result.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div>
			<h1> Users List</h1>
			<ul>
				{users.map((user) => (
					<li key={user._id}>
						<div>
							<h2>{user.username}</h2>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
};