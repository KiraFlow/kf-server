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

    async getUserStories() {
        try {
            return await UserStory.find({});
        } catch (err) {
            throw err;
        }
    }

}