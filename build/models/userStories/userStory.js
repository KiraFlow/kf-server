"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStory = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userStoriesSchema_1 = require("../../schemas/userStoriesSchema");
userStoriesSchema_1.userStorySchema.statics.build = function (story) {
    return new UserStory(story);
};
var UserStory = mongoose_1.default.model('UserStory', userStoriesSchema_1.userStorySchema);
exports.UserStory = UserStory;
