import mongoose, {Schema} from "mongoose";
import {UserStoryModelInterface, UserStoryDoc} from "./userStoryDoc";
import {UserStoryInterface} from "../../Interfaces/userStoryInterface";

const userStorySchema = new mongoose.Schema({
    title: String,
    description: String,
    estimation: Number,
    listIndex: Number,
    position: Number,
    creationDate: Date,
});

userStorySchema.statics.build = (story: UserStoryInterface) => {
    return new UserStory(story);
}

const UserStory = mongoose.model<UserStoryDoc, UserStoryModelInterface>('UserStory', userStorySchema);

export {UserStory}