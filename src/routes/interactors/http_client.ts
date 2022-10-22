import * as Axios from "axios";

const axios = Axios.default;

export interface IRequestContext {
    userId?: string;
    condoId?: string;
    userRole?: string;
}
export class HttpClient {
    public send(options: Axios.AxiosRequestConfig): Promise<any> {
        // TODO: change x-api-key
        options.headers = {
            "x-api-key": "Test API Key",
            ...options.headers,
        };

        options.timeout = options.timeout || 60000;

        return Promise.resolve()
        .then(() => axios(options));
    }
}

export default HttpClient;
