import mongoose, {Schema} from "mongoose";
import {UserStoryModelInterface, UserStoryDoc} from "./userStoryDoc";
import {UserStoryInterface} from "../../Interfaces/userStoryInterface";
import {userStorySchema} from "../../schemas/userStoriesSchema";

userStorySchema.statics.build = (story: UserStoryInterface) => {
    return new UserStory(story);
}

const UserStory = mongoose.model<UserStoryDoc, UserStoryModelInterface>('UserStory', userStorySchema);

export {UserStory}