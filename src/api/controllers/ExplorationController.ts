import {Request, Response} from "express";
import {get, post, del, put, patch, controller} from "../decorators";
import {ExplorationService} from "../../services/ExplorationService";
import {Container, Service} from 'typedi';
import {explorationStories} from "../../models/userStories/userStoryDoc";

@controller('/exploration')
class ExplorationController {

    constructor(
        private userStoryService: ExplorationService
    ) {
    }

    @put('/update-board')
    updateBoardOrder(req: Request, res: Response): void {
        let boardStories = req.body.userStory;
        const userStoryServiceInstance = Container.get(ExplorationService);
        userStoryServiceInstance.updateBoardStories(boardStories).then(function (result: any) {
            res.send(result);
        });
    }

    @del('/delete')
    deleteStory(req: Request, res: Response): void {
        let userStoryId: string = req.body.userStoryId;
        const userStoryServiceInstance = Container.get(ExplorationService);
        userStoryServiceInstance.deleteUserStory(userStoryId).then(function (result: any) {
            res.send(result);
        });
    }

    @get('/get')
    getStories(req: Request, res: Response) {
        const userStoryServiceInstance = Container.get(ExplorationService);
        userStoryServiceInstance.getUserStories().then(function (result: any) {
            res.send(result);
        });
    }

    @post('/create')
    createStory(req: Request, res: Response): void {
        let userStory: explorationStories = req.body;
        const userStoryServiceInstance = Container.get(ExplorationService);
        userStoryServiceInstance.createUserStory(userStory).then(function (result: any) {
            res.send(result);
        });
    }

    @put('/put')
    patchStory(req: Request, res: Response): void {
        let userStoryId: string = req.body._id;
        let userStory: explorationStories = req.body;
        const userStoryServiceInstance = Container.get(ExplorationService);
        userStoryServiceInstance.updateUserStory(userStory, userStoryId).then(function (result: any) {
            res.send(result);
        });
    }
}