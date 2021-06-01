"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./api/controllers/index");
var index_1 = __importDefault(require("./config/index"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cookie_session_1.default({ keys: ['encrypt-session-key-dummy-string'] }));
app.use(AppRouter_1.AppRouter.getInstance());
mongoose_1.default.connect('mongodb://localhost:27017/kiraflow', { useNewUrlParser: true, useUnifiedTopology: true }, function () {
    console.log('connected to the DB');
});
app.listen(index_1.default.serverPort, function () {
    console.log("Listening on port " + index_1.default.serverPort);
});
