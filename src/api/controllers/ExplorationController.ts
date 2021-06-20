import {Request, Response} from "express";
import {get, post, del, put, patch, controller} from "../decorators";
import {UserStoryService} from "../../services/UserStoryService";
import {Container, Service} from 'typedi';
import {UserStoryInterface} from "../../models/userStories/userStoryInterface";


@controller('/exploration')
class ExplorationController {

    constructor(
        private userStoryService: UserStoryService
    ) {
    }

    @put('/update-board')
    updateBoardOrder(req: Request, res: Response): void {
        let boardStories = req.body.userStory;
        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.updateBoardStories(boardStories).then(function (result: any) {
            res.send(result);
        });
    }

    @del('/delete')
    deleteStory(req: Request, res: Response): void {
        let userStoryId: string = req.body.userStoryId;
        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.deleteUserStory(userStoryId).then(function (result: any) {
            res.send(result);
        });
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
        userStoryServiceInstance.createUserStory(userStory).then(function (result: any) {
            res.send(result);
        });
    }

    @put('/put')
    patchStory(req: Request, res: Response): void {
        let userStoryId: string = req.body._id;
        let userStory: UserStoryInterface = req.body;
        const userStoryServiceInstance = Container.get(UserStoryService);
        userStoryServiceInstance.updateUserStory(userStory, userStoryId).then(function (result: any) {
            res.send(result);
        });
    }
}