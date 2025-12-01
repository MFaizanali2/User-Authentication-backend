import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import multer from "multer"
import { User } from "./Model/User.js"

const app = express()
dotenv.config()
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECREAT,
});

app.use(express.urlencoded({ extended: true }))


mongoose
.connect(process.env.MONGODB,
    {
        dbName: "Nodejs_Course",
    }
)
.then(() => console.log("MongoDb Connected..!"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("login.ejs", { url: null });
});

app.get("/register", (req, res) => {
  res.render("register.ejs", { url: null });
});

const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server Started at PORT ${PORT}`)
})