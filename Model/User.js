import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    filename: String,
    public_id: String,
    imgUrl: String,
})

export const User = mongoose.model("user", userSchema)