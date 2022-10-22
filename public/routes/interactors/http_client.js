"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const Axios = require("axios");
const axios = Axios.default;
class HttpClient {
    send(options) {
        options.headers = Object.assign({ "x-api-key": "Test API Key" }, options.headers);
        options.timeout = options.timeout || 60000;
        return Promise.resolve()
            .then(() => axios(options));
    }
}
exports.HttpClient = HttpClient;
exports.default = HttpClient;
//# sourceMappingURL=http_client.js.map