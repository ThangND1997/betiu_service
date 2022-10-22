import * as express from "express";
import httpclient from "../interactors/statistics_http_client";



export class UsersHandler {
    public static async list(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const nameSearch = req.query.key || "";
            const httpStatistic = new httpclient();
            const result = await httpStatistic.retrieveListFilm({keyword: nameSearch});
            
            res.json(result.data)


        } catch (err) {
            next(err)
        }
    }

    public static async view(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const nameSearch = req.query.key || "";
            const httpStatistic = new httpclient();
            const result = await httpStatistic.retrieveViewFilm({ nameSearch });
            
            res.json(result)


        } catch (err) {
            next(err)
        }
    }

}

export default UsersHandler;
