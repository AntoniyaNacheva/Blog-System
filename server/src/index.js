import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
	"mongodb+srv://nachevaantoniya:Blog-System-2023@posts.w1g79td.mongodb.net/posts?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server listening on port 3001!"));

