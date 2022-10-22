"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./handler");
const express = require("express");
const router = express.Router();
router.route("/list")
    .get(handler_1.UsersHandler.list);
router.route("/view")
    .get(handler_1.UsersHandler.view);
exports.default = router;
//# sourceMappingURL=router.js.map