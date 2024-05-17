import { Request, Response } from "express";

import response from "@/utilities/response";
import MessageService from "@/services/v1/message.service";

class MessageController {
    async sendMessage(req: Request, res: Response) {
        const result = await MessageService.sendMessage(req);
        res.status(200).send(response("Message delivered", result));
    }
}

export default new MessageController();
