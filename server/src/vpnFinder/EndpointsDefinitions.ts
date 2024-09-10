import { ResultatValue } from './ErrorModel';
import http from 'http';
import fetch from 'node-fetch';
import { GetFilmResultResponse } from '../../../client/src/Shared/RequestsResponses/GetFilmResult';
import { GetFilmsResultsResponse } from '../../../client/src/Shared/RequestsResponses/GetFilmsResults';
import { GetWatchProvidersResponse } from '../../../client/src/Shared/RequestsResponses/GetWatchProviders';
import { GetTvResultsResponse } from '../../../client/src/Shared/RequestsResponses/GetTvsResults';
import { GetTvResultResponse } from '../../../client/src/Shared/RequestsResponses/GetTvResult';

export class EndpointsDefinitions {
    httpServer: http.Server;
    static apiKey =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2JkZGRlMzUxYzZhN2E3ZWJhNDMyM2JmMGQ1NmY3NCIsInN1YiI6IjY1OGVmZDNkMGU1YWJhNzJiNjg2MmQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lb0IWJdaPh16_cmIxEkUKT-gHVI_egK9wIV9G8R3wWg';
    static baseUrl = 'https://api.themoviedb.org/3/';

    constructor(httpServer: http.Server) {
        this.httpServer = httpServer;
    }

    public static async GetFilmsResults(title: string): Promise<ResultatValue<GetFilmsResultsResponse>> {
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

            const result = await response.json();

            return {
                value: new GetFilmsResultsResponse(result.results),
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

    public static async GetTvsResults(name: string): Promise<ResultatValue<GetTvResultsResponse>> {
        try {
            const response = await fetch(this.baseUrl + `search/tv?query=${name}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Un problème est survenu lors de l'appel à GetfilmResults pour les tv`
                };
            }

            const result = await response.json();

            return {
                value: new GetTvResultsResponse(result.results),
                success: true
            };
        } catch (e) {
            console.log(e);
            return {
                success: false,
                message: `Un problème est survenu lors de l'appel à GetfilmResults pour les tv, dans le catch`
            };
        }
    }

    public static async GetFilmResult(filmId: number): Promise<ResultatValue<GetFilmResultResponse>> {
        try {
            const response = await fetch(this.baseUrl + `movie/${filmId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Un problème est survenu lors de l'appel à GetfilmResult pour les films`
                };
            }

            const result = await response.json();

            return {
                value: new GetFilmResultResponse(result),
                success: true
            };
        } catch (e) {
            console.log(e);
            return {
                success: false,
                message: `Un problème est survenu lors de l'appel à GetfilmResult pour les films, dans le catch`
            };
        }
    }

    public static async GetTvResult(tvId: number): Promise<ResultatValue<GetTvResultResponse>> {
        try {
            const response = await fetch(this.baseUrl + `tv/${tvId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Un problème est survenu lors de l'appel à GetTvResult pour les tv`
                };
            }

            const result = await response.json();

            return {
                value: new GetTvResultResponse(result),
                success: true
            };
        } catch (e) {
            console.log(e);
            return {
                success: false,
                message: `Un problème est survenu lors de l'appel à GetTvResult pour les tv, dans le catch`
            };
        }
    }

    public static async GetWatchProviders(filmId: number): Promise<ResultatValue<GetWatchProvidersResponse>> {
        try {
            const response = await fetch(this.baseUrl + `movie/${filmId}/watch/providers`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                return {
                    success: false,
                    message: `Un problème est survenu lors de l'appel à GetfilmResult pour les films`
                };
            }

            const result = await response.json();

            return {
                value: new GetWatchProvidersResponse(result.results),
                success: true
            };
        } catch (e) {
            console.log(e);
            return {
                success: false,
                message: `Un problème est survenu lors de l'appel à GetfilmResult pour les films, dans le catch`
            };
        }
    }
}
