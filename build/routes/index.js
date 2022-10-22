"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./users/router");
const router = express.Router();
router.use("/api/v1/", router_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map