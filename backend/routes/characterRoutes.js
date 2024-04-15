import { Router } from "express";

export const characterRoutes = Router();

characterRoutes.get("/", (req, res) => {
  res.send("You got the character route");
});
