import mongoose from "mongoose";
import {UserStoryInterface} from "../../Interfaces/userStoryInterface";
import {ExplorationInterface} from "../../Interfaces/explorationInterface";


export type explorationStories = UserStoryInterface & ExplorationInterface

export type UserStoryDoc = explorationStories  & mongoose.Document;

export interface UserStoryModelInterface extends mongoose.Model<any> {
    build(story: explorationStories): UserStoryDoc
}
