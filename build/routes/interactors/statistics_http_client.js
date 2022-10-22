"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = require("./http_client");
const ROUTES = {
    RETIREVE: "https://ophim.cc/_next/data/2uibqhufwNeudgKQPPGsA/tim-kiem.json",
};
class StatisticsHttpClient extends http_client_1.default {
    retrieveTapsStatistics(query) {
        return Promise.resolve(this.send({
            url: ROUTES.RETIREVE,
            method: "GET",
            params: query
        }));
    }
}
exports.default = StatisticsHttpClient;
//# sourceMappingURL=statistics_http_client.js.map