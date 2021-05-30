import {NextFunction, Request, Response} from "express";
import {use, controller, get} from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not Permitted');
}

@controller('')
class RootController {

    @get('/')
    getRoot(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            res.send(`
            <h1>You are logged in</h1>
            <a href="/auth/logout">logout fucker</a>
        `);
        } else {
            res.send(`
            <h1>You are NOT logged in</h1>
            <a href="/auth/login">login fucker</a>
        `);
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('Welcome to protected route!');
    }
}