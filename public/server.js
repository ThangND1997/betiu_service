"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotEnv = require("dotenv");
const sourceMapSupport = require("source-map-support");
const app_1 = require("./app");
if (process.env.NODE_ENV !== "production") {
    sourceMapSupport.install();
}
dotEnv.config();
new app_1.default().listen(process.env.PORT || 3000);
//# sourceMappingURL=server.js.map