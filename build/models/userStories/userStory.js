"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStory = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userStorySchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    estimation: Number,
    listIndex: Number,
    position: Number,
    creationDate: Date
});
userStorySchema.statics.build = function (story) {
    return new UserStory(story);
};
var UserStory = mongoose_1.default.model('UserStory', userStorySchema);
exports.UserStory = UserStory;
