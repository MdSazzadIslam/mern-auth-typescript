import { Router } from "express";
import { login, registration } from "../controllers/userController";

const router: Router = Router();
router.post("/login", login);
router.post("/registration", registration);

export default router;
