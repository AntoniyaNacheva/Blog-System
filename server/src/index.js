import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://nachevaantoniya:Blog-System-2023@posts.w1g79td.mongodb.net/posts?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server listening on port 3001!"));

