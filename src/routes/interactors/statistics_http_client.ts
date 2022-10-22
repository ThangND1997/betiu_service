import HttpClient from "./http_client";


const ROUTES = {
    LIST: "https://ophim.cc/_next/data/2uibqhufwNeudgKQPPGsA/tim-kiem.json",
    VIEW: "https://ophim1.com/phim/"
};

class StatisticsHttpClient extends HttpClient {
    public retrieveListFilm(query: any): Promise<any> {
        return Promise.resolve(this.send({
            url: ROUTES.LIST,
            method: "GET",
            params: query
        }));
    }

    public retrieveViewFilm(query: any): Promise<any> {
        return Promise.resolve(this.send({
            url: `${ROUTES.VIEW}/${query.nameSearch}`,
            method: "GET",
            params: query
        }));
    }
}

export default StatisticsHttpClient;