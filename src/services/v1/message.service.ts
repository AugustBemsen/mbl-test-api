import Joi from "joi";
import { Request } from "express";

import CustomError from "@/utilities/custom-error";
import MessageModel from "@/models/message.model";
import UserModel from "@/models/user.model";

class UserService {
    // create  conversation
    async sendMessage({ body, $currentUser }: Partial<Request>) {
        // Validate data
        const { error, value: data } = Joi.object({
            body: Joi.object({
                subject: Joi.string().trim().required(),
                content: Joi.string().trim().required(),
                recipient: Joi.string().trim().required(),
            }),
            $currentUser: Joi.object({
                _id: Joi.required(),
            }),
        })
            .options({ stripUnknown: true })
            .validate({ body, $currentUser });
        if (error) throw new CustomError(error.message, 400);

        // Check if user exists
        const user = await UserModel.findOne({ _id: data.$currentUser._id });
        if (!user) throw new CustomError("user not found", 404);

        const payload = {
            subject: data.body.subject,
            content: data.body.content,
            recipient: data.body.recipient,
            sender: data.$currentUser._id,
            isRead: false,
        };

        // Create a new conversation
        const message = await new MessageModel(payload).save();

        return message;
    }
}

export default new UserService();
