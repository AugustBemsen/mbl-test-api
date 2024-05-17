import { CONFIGS } from "@/configs";
import messageController from "@/controllers/v1/message.controller";
import authGuard from "@/middlewares/auth.middleware";
import { Router } from "express";

const router: Router = Router();

router.post("/send-message", authGuard(CONFIGS.APP_ROLES.USER), messageController.sendMessage);

export default router;
