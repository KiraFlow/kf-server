"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <h1>You are logged in</h1>\n            <a href=\"/logout\">logout fucker</a>\n        ");
    }
    else {
        res.send("\n            <h1>You are NOT logged in</h1>\n            <a href=\"/login\">login fucker</a>\n        ");
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route!');
});
