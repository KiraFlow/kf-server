import mongoose from "mongoose";

export interface UserStoryInterface {
    description: string;
    listIndex: number;
    position: number;
    estimation: number;
    title: string;
    creationDate: Date;
}

export interface UserStoryDoc extends mongoose.Document {
    description: string;
    listIndex: number;
    position: number;
    estimation: number;
    title: string;
    creationDate: Date;
}


export interface UserStoryModelInterface extends mongoose.Model<any> {
    build(story: UserStoryInterface): UserStoryDoc
}
