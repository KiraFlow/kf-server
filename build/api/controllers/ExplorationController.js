"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
var UserStoryService_1 = require("../../services/UserStoryService");
var typedi_1 = require("typedi");
var ExplorationController = /** @class */ (function () {
    function ExplorationController(userStoryService) {
        this.userStoryService = userStoryService;
    }
    ExplorationController.prototype.deleteStory = function (req, res) {
        var userStoryId = req.body.userStoryId;
        var userStoryServiceInstance = typedi_1.Container.get(UserStoryService_1.UserStoryService);
        userStoryServiceInstance.deleteUserStory(userStoryId).then(function (result) {
            res.send(result);
        });
    };
    ExplorationController.prototype.getStories = function (req, res) {
        var userStoryServiceInstance = typedi_1.Container.get(UserStoryService_1.UserStoryService);
        userStoryServiceInstance.getUserStories().then(function (result) {
            res.send(result);
        });
    };
    ExplorationController.prototype.createStory = function (req, res) {
        var userStory = req.body;
        var userStoryServiceInstance = typedi_1.Container.get(UserStoryService_1.UserStoryService);
        userStoryServiceInstance.createUserStory(userStory).then(function (r) { return console.log(r); });
    };
    ExplorationController.prototype.patchStory = function (req, res) {
        var userStoryId = req.body._id;
        var userStory = req.body;
        var userStoryServiceInstance = typedi_1.Container.get(UserStoryService_1.UserStoryService);
        userStoryServiceInstance.updateUserStory(userStory, userStoryId).then(function (r) { return console.log(r); });
        res.send('patched!');
    };
    __decorate([
        decorators_1.del('/delete'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ExplorationController.prototype, "deleteStory", null);
    __decorate([
        decorators_1.get('/get'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ExplorationController.prototype, "getStories", null);
    __decorate([
        decorators_1.post('/create'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ExplorationController.prototype, "createStory", null);
    __decorate([
        decorators_1.put('/put'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ExplorationController.prototype, "patchStory", null);
    ExplorationController = __decorate([
        decorators_1.controller('/exploration'),
        __metadata("design:paramtypes", [UserStoryService_1.UserStoryService])
    ], ExplorationController);
    return ExplorationController;
}());
