import express from "express";
import { appRouter } from "./routes/index.js";

const app = express();
const port = 3000;

app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
