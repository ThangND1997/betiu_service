/**
 * Created by davidho on 2/14/17.
 */
import { UsersHandler } from "./handler";
import * as express from "express";
const router = express.Router();

router.route("/list")
    .get(UsersHandler.list)

router.route("/view")
    .get(UsersHandler.view)

export default router;
