import mongoose from "mongoose";
import {UserStoryInterface} from "../../Interfaces/userStoryInterface";

export type explorationStories = UserStoryInterface

export type UserStoryDoc = explorationStories  & mongoose.Document;

export interface UserStoryModelInterface extends mongoose.Model<any> {
    build(story: explorationStories): UserStoryDoc
}
