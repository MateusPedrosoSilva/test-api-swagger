import express from "express";
import PingController from "../controllers/ping";
import UserRouter from "./user.router";
import PostRouter from "./post.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/users", UserRouter);
router.use("/posts", PostRouter);

export default router;
