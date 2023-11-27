import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SECRET } from '../constants.js';

const router = express.Router();

import { UserModel } from "../models/Users.js";

router.post("/register", async (req, res) => {
	const { username, password } = req.body;

	const user = await UserModel.findOne({ username });

	if (user) {
		return res.status(400).json({ message: "User already exists!" });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = new UserModel({ username, password: hashedPassword });
	await newUser.save();

	res.json({ message: "User registered successfully!" });
});

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await UserModel.findOne({ username });

		if (!user) {
			return res.status(400).json({ message: "Username or password is incorrect!" });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(400).json({ message: "Username or password is incorrect!" });
		}

		const token = jwt.sign({ id: user._id }, SECRET);
		res.cookie('auth', token);
		res.json({ token, userID: user._id });

	} catch (err) {
		return res.json({ message: "Server error" });
	}
});

router.get("/", async (req, res) => {
	try {
		const result = await UserModel.find({});
		res.json(result);
	} catch (err) {
		res.json(err);
	}
});

export const verifyToken = (req, res, next) => {
	const token = req.cookies['auth']

	if (token) {
		try {
			const decodedToken = jwt.verify(token, SECRET);

			req.user = decodedToken;
			res.locals.isAuthenticated = true;
			res.locals.user = decodedToken;
		} catch (err) {
			res.clearCookie('auth');
			return res.status(401);
		}
	}

	next();
};

export { router as userRouter };