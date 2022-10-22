"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = require("./http_client");
const ROUTES = {
    LIST: "https://ophim.cc/_next/data/2uibqhufwNeudgKQPPGsA/tim-kiem.json",
    VIEW: "https://ophim1.com/phim/"
};
class StatisticsHttpClient extends http_client_1.default {
    retrieveListFilm(query) {
        return Promise.resolve(this.send({
            url: ROUTES.LIST,
            method: "GET",
            params: query
        }));
    }
    retrieveViewFilm(query) {
        return Promise.resolve(this.send({
            url: `${ROUTES.VIEW}/${query.nameSearch}`,
            method: "GET",
            params: query
        }));
    }
}
exports.default = StatisticsHttpClient;
//# sourceMappingURL=statistics_http_client.js.map