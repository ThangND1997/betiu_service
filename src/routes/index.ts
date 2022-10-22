import * as express from "express";
// import todo from "./todo/router";
import users from "./users/router";

const router = express.Router();

router.use("/api/v1/", users);

export default router;
