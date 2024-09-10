import * as core from 'express-serve-static-core';
import http from 'http';
import { EndpointsDefinitions } from './EndpointsDefinitions';
import { GetFilmsResultsRequest } from '../../../client/src/Shared/RequestsResponses/GetFilmsResults';
import { GetFilmResultRequest } from '../../../client/src/Shared/RequestsResponses/GetFilmResult';
import { GetWatchProvidersRequest } from '../../../client/src/Shared/RequestsResponses/GetWatchProviders';
import { GetTvResultsRequest } from '../../../client/src/Shared/RequestsResponses/GetTvsResults';
import { GetTvResultRequest } from '../../../client/src/Shared/RequestsResponses/GetTvResult';

export class VpnFinderApi {
    httpServer: http.Server;

    constructor(httpClient: http.Server) {
        this.httpServer = httpClient;
    }

    static registerEndpoint = (application: core.Express) => {
        application.get('/' + GetFilmsResultsRequest.Message, async (req, res) => {
            const filmToSearch = req.query['title'] as string;
            const includeAdult = req.query['includeAdult'] as string;

            console.log(`include adult ${includeAdult}`);
            const result = await EndpointsDefinitions.GetFilmsResults(filmToSearch, includeAdult);

            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).json(result.value);
        });

        application.get('/' + GetTvResultsRequest.Message, async (req, res) => {
            const tvToSearch = req.query['name'] as string;
            const includeAdult = req.query['includeAdult'] as string;
            console.log(`include adult ${includeAdult}`);
            const result = await EndpointsDefinitions.GetTvsResults(tvToSearch, includeAdult);

            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).json(result.value);
        });

        application.get('/' + GetFilmResultRequest.Message, async (req, res) => {
            const filmId = req.query['filmId'] as string;
            const result = await EndpointsDefinitions.GetFilmResult(+filmId);

            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).json(result.value);
        });

        application.get('/' + GetTvResultRequest.Message, async (req, res) => {
            const tvId = req.query['tvId'] as string;
            const result = await EndpointsDefinitions.GetTvResult(+tvId);

            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).json(result.value);
        });

        application.get('/' + GetWatchProvidersRequest.Message, async (req, res) => {
            const filmId = req.query['filmId'] as string;
            const result = await EndpointsDefinitions.GetWatchProviders(+filmId);

            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).json(result.value);
        });
    };
}
