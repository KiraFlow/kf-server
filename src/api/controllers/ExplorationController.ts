import {Request, Response} from "express";
import {get, post, del, controller} from "../decorators";
import {UserStoryService} from "../../services/UserStoryService";
import {Container, Service} from 'typedi';
import {UserStoryInterface} from "../../models/userStories/userStoryInterface";


@controller('/exploration')
class ExplorationController {

    constructor(
        private userStoryService: UserStoryService
    ) {
    }

    @del('/delete')
    deleteStory(req: Request, res: Response): void {
        let userStoryId: string = req.body.userStoryId;
        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.deleteUserStory(userStoryId).then(function (result: any) {
            res.send(result);
        });
        res.send('deleted!');
    }

    @get('/get')
    getStories(req: Request, res: Response) {
        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.getUserStories().then(function (result: any) {
            res.send(result);
        });
    }

    @post('/create')
    createStory(req: Request, res: Response): void {
        let userStory: UserStoryInterface = req.body;
        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.createUserStory(userStory).then(r => console.log(r));
        res.send('created!');
    }

}