/**
 * Created by kiettv on 12/16/16.
 */
import * as dotEnv from "dotenv";
import * as sourceMapSupport from "source-map-support";
import Application from "./app";


if (process.env.NODE_ENV !== "production") {
    sourceMapSupport.install();
}
dotEnv.config();
// Bootstrap new app
new Application().listen(3000);
