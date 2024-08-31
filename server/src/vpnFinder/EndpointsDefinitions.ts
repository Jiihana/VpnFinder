import { FilmResultModel } from '../../../client/src/Shared/FilmResultModel';
import { ResultatValue } from './ErrorModel';
import http from 'http';
import fetch from 'node-fetch';

export class EndpointsDefinitions {
    httpServer: http.Server;
    static apiKey =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2JkZGRlMzUxYzZhN2E3ZWJhNDMyM2JmMGQ1NmY3NCIsInN1YiI6IjY1OGVmZDNkMGU1YWJhNzJiNjg2MmQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lb0IWJdaPh16_cmIxEkUKT-gHVI_egK9wIV9G8R3wWg';
    static baseUrl = 'https://api.themoviedb.org/3/';

    constructor(httpServer: http.Server) {
        this.httpServer = httpServer;
    }

    public static async GetFilmsResults(title: string): Promise<ResultatValue<FilmResultModel[]>> {
        try {
            const response = await fetch(this.baseUrl + `search/movie?query=${title}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Un problème est survenu lors de l'appel à GetfilmResults pour les films`
                };
            }

            const result = (await response.json()) as FilmResultModel[];

            return {
                value: result,
                success: true
            };
        } catch (e) {
            console.log(e);
            return {
                success: false,
                message: `Un problème est survenu lors de l'appel à GetfilmResults pour les films, dans le catch`
            };
        }
    }
}
