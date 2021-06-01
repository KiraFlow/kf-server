import {Request, Response} from "express";
import {get, post, controller} from "../decorators";
import {UserStoryService} from "../../services/UserStoryService";
import {Container, Service} from 'typedi';
import {UserStoryInterface} from "../../models/userStories/userStoryInterface";


@controller('/exploration')
class ExplorationController {

    constructor(
        private userStoryService: UserStoryService
    ) {
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
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        let userStory: UserStoryInterface = req.body;

        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.createUserStory(userStory).then(r => console.log(r));

        res.send('created!');
    }

}