import Joi from "joi";
import { Request } from "express";

import UserModel from "@/models/user.model";
import CustomError from "@/utilities/custom-error";

class UserService {
    async getUser({ $currentUser }: Partial<Request>) {
        const { error, value: data } = Joi.object({
            $currentUser: Joi.object({
                _id: Joi.required(),
            }),
        })
            .options({ stripUnknown: true })
            .validate({ $currentUser });
        if (error) throw new CustomError(error.message, 400);

        return await UserModel.findOne({ _id: data.$currentUser._id });
    }
}

export default new UserService();
