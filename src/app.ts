import express from 'express';
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import {AppRouter} from "./AppRouter";
import './api/controllers/index';
import config from './config/index';
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieSession({keys: ['encrypt-session-key-dummy-string']}));
app.use(AppRouter.getInstance());

mongoose.connect('mongodb://localhost:27017/kiraflow', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to the DB')
});

app.listen(config.serverPort, () => {
    console.log(`Listening on port ${config.serverPort}`);
});