import * as core from 'express-serve-static-core';
import { GetFilmsResultsRequest } from '../../../client/src/Shared/Socket_messages/GetFilmsResults';
import { EndpointsDefinitions } from './EndpointsDefinitions';

export class vpnFinderServerApi {
    static registerEndpoint = (application: core.Express) => {
        const endpointsDefinitions = new EndpointsDefinitions();

        application.get('/' + GetFilmsResultsRequest.Message, (req, res) => {
            const filmToSearch = req.query['title'] as string;

            const result = endpointsDefinitions.GetFilmsResults();
            if (!result.success) {
                return res.status(404).send(result.message);
            }

            return res.status(200).send();
        });
    };
}
