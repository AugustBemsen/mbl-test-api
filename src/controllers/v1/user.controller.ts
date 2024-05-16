import { Request, Response } from "express";

import response from "@/utilities/response";
import UserService from "@/services/v1/user.service";

class UserController {
    async getUser(req: Request, res: Response) {
        const result = await UserService.getUser(req);
        res.status(200).send(response("user retrieved", result));
    }
}

export default new UserController();
