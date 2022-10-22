"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const compression = require("compression");
const express = require("express");
const http = require("http");
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
const body_parser_1 = require("body-parser");
function rawBodySaver(req, res, buf, encoding) {
    if (buf && buf.length) {
        req.bufferBody = buf;
    }
}
class Application {
    constructor(opts) {
        this.opts = opts !== null ? Object.assign({}, opts) : {};
        this.app = express();
        this.app.locals.title = "iCondo";
        this.app.enable("case sensitive routing");
        this.app.enable("trust proxy");
        this.app.disable("x-powered-by");
        this.app.disable("etag");
        this.app.use((0, body_parser_1.json)({ limit: "5mb", verify: rawBodySaver }));
        this.app.use((0, body_parser_1.urlencoded)({ limit: "5mb", extended: false, verify: rawBodySaver }));
        this.app.use(compression());
        this.app.use((0, middlewares_1.cors)());
        this.app.use("/", routes_1.default);
    }
    listen(port) {
        Promise.all([])
            .then(() => {
            if (process.env.PORT != null) {
                this.bind = Application.normalizePort(process.env.PORT);
            }
            else if (port != null) {
                this.bind = Application.normalizePort(port);
            }
            else {
                this.bind = 3000;
            }
            this.app.set("port", this.bind);
            this.server = http.createServer(this.app);
            this.server.on("error", this.onError.bind(this));
            this.server.on("listening", this.onListening.bind(this));
            this.server.listen(this.bind);
            console.log(`listening... ${this.bind}`);
        })
            .then(() => {
        })
            .catch(err => {
            console.log(err);
        });
    }
    getExpressInstance() {
        return this.app;
    }
    onListening() {
        let addr = this.server.address();
        let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    }
    onError(error) {
        if (error.syscall !== "listen") {
            throw error;
        }
        switch (error.code) {
            case "EACCES":
                process.exit(1);
                break;
            case "EADDRINUSE":
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    static normalizePort(val) {
        let port = parseInt(val, 10);
        if (isNaN(port)) {
            return val;
        }
        if (port >= 0) {
            return port;
        }
        return false;
    }
}
exports.Application = Application;
exports.default = Application;
//# sourceMappingURL=app.js.map