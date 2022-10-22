/**
 * Created by kiettv on 12/16/16.
 */
import * as compression from "compression";
import * as express from "express";
import * as http from "http";
import Router from "./routes";
import { cors } from "./middlewares";
// import { BaseDto } from "./data/sql/models";
import { json, urlencoded } from "body-parser";

function rawBodySaver(req, res, buf, encoding) {
    if (buf && buf.length) {
        req.bufferBody = buf;
    }
}
export class Application {
    private opts: any;
    private app: express.Express;
    private bind: number;
    private server: http.Server;

    constructor(opts?: any) {
        this.opts = opts !== null ? { ...opts } : {};
        this.app = express();
        this.app.locals.title = "iCondo";
        this.app.enable("case sensitive routing");
        this.app.enable("trust proxy");
        this.app.disable("x-powered-by");
        this.app.disable("etag");
        this.app.use(json({limit: "5mb", verify: rawBodySaver}));
        this.app.use(urlencoded({limit: "5mb", extended: false, verify: rawBodySaver }));
        this.app.use(compression());
        this.app.use(cors());
        this.app.use("/", Router);
    }

    public listen(port: any) {
        Promise.all([
            // Database.migration(),
        ])
            .then(() => {
                if (process.env.PORT != null) {
                    this.bind = Application.normalizePort(process.env.PORT);
                } else if (port != null) {
                    this.bind = Application.normalizePort(port);
                } else {
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
                // return DynamodbAccess.test();
            })
            .catch(err => {
                console.log(err);
            });
    }

    public getExpressInstance(): express.Express {
        return this.app;
    }

    private onListening() {
        let addr = this.server.address();
        let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    }

    private onError(error: any) {
        if (error.syscall !== "listen") {
            throw error;
        }

        // handle specific listen errors with friendly messages
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

    private static normalizePort(val: any) {
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

export default Application;
