import http from 'http';
import express from 'express';
import { VpnFinderApi } from './vpnFinder/vpnFinderApi';
import cors from 'cors';
require('dotenv').config({ path: ['.env.local', '.env'] });

const application = express();

/** Server Handling */
const httpServer = http.createServer(application);

application.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true //access-control-allow-credentials:true
    })
);

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

/** Log the request */
application.use((req, res, next) => {
    console.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        console.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Healthcheck */
application.get('/ping', (req, res, next) => {
    return res.status(200).json({ hello: 'world!' });
});

VpnFinderApi.registerEndpoint(application);

/** Error handling */
application.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

/** Listen */
httpServer.listen(process.env.REACT_APP_GAMESERVER_PORT, () => console.info(`Server is running`));
