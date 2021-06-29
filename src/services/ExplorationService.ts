import {explorationStories} from "../models/userStories/userStoryDoc";
import {UserStory} from "../models/userStories/userStory";
import {Service} from 'typedi';

@Service()
export class ExplorationService {

    async createUserStory(story: explorationStories) {

        await UserStory.updateMany({listIndex: 0},  {$inc : {'position' : 1}});
        const userStory = UserStory.build(story);
        await userStory.save();
        return userStory;
    }

    async updateBoardStories(stories: any) {
        var ops = null;

        ops = stories.map((x: any) => ({ updateOne: {
                filter: { _id: x._id},
                update: { $set: {"listIndex": x.listIndex, "position": x.position} }, upsert: true }
        }));

        if(ops) {
            try {
                await UserStory.bulkWrite(ops);
            } catch (err) {
                throw err;
            }
            return true;
        } else {
            return false;
        }
    }

    async updateUserStory(story: explorationStories, storyId: string) {
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