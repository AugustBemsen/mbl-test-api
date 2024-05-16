import { CONFIGS } from "@/configs";
import userController from "@/controllers/v1/user.controller";
import authGuard from "@/middlewares/auth.middleware";
import { Router } from "express";

const router: Router = Router();

router.patch("/get-user", authGuard(CONFIGS.APP_ROLES.USER), userController.getUser);

export default router;
