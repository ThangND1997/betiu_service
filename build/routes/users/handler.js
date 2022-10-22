"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersHandler = void 0;
const statistics_http_client_1 = require("../interactors/statistics_http_client");
class UsersHandler {
    static async list(req, res, next) {
        try {
            const nameSearch = req.query.key || "";
            const httpStatistic = new statistics_http_client_1.default();
            const result = await httpStatistic.retrieveListFilm({ keyword: nameSearch });
            res.json(result.data);
        }
        catch (err) {
            next(err);
        }
    }
    static async view(req, res, next) {
        try {
            const nameSearch = req.query.key || "";
            const httpStatistic = new statistics_http_client_1.default();
            const result = await httpStatistic.retrieveViewFilm({ nameSearch });
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UsersHandler = UsersHandler;
exports.default = UsersHandler;
//# sourceMappingURL=handler.js.map