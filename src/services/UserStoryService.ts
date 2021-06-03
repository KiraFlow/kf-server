import {UserStoryInterface} from "../models/userStories/userStoryInterface";
import {UserStory} from "../models/userStories/userStory";
import {Service} from 'typedi';

@Service()
export class UserStoryService {

    async createUserStory(story: UserStoryInterface) {

        await UserStory.updateMany({listIndex: 0},  {$inc : {'position' : 1}});

        const userStory = UserStory.build(story);
        await userStory.save();
        return true;
    }

    async updateUserStory(story: UserStoryInterface, storyId: string) {
        try {
            await UserStory.updateOne({_id: storyId},  story);
        } catch (err) {
            throw err;
        }
    }

    async deleteUserStory(userStoryId: string) {
        try {
            return await UserStory.deleteOne({_id: userStoryId});
        } catch (err) {
            throw err;
        }
    }

    async getUserStories() {
        try {
            return await UserStory.find({});
        } catch (err) {
            throw err;
        }
    }

}