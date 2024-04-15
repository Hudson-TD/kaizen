import { Router } from "express";
import { characterRoutes } from "./characterRoutes.js";

export const appRouter = Router();

appRouter.use("/character", characterRoutes);
