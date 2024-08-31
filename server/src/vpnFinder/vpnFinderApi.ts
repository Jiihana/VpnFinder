import * as core from 'express-serve-static-core';
import http from 'http';
import { GetFilmsResultsRequest } from '../../../client/src/Shared/Socket_messages/GetFilmsResults';
import { EndpointsDefinitions } from './EndpointsDefinitions';

export class VpnFinderApi {
    httpServer: http.Server;

    constructor(httpClient: http.Server) {
        this.httpServer = httpClient;
    }

    static registerEndpoint = (application: core.Express) => {
        application.get('/' + GetFilmsResultsRequest.Message, async (req, res) => {
            const filmToSearch = req.query['title'] as string;
            const result = await EndpointsDefinitions.GetFilmsResults(filmToSearch);

            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).json(result.value);
        });
    };
}
