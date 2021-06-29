import mongoose from "mongoose";

export const userStorySchema = new mongoose.Schema({
    title: String,
    description: String,
    estimation: Number,
    listIndex: Number,
    position: Number,
    creationDate: Date,
});