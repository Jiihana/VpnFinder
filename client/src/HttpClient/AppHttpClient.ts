import { GetFilmResultRequest, GetFilmResultResponse } from '../Shared/RequestsResponses/GetFilmResult';
import { GetFilmsResultsResponse, GetFilmsResultsRequest } from '../Shared/RequestsResponses/GetFilmsResults';
import { GetWatchProvidersRequest, GetWatchProvidersResponse } from '../Shared/RequestsResponses/GetWatchProviders';

export class AppHttpClient {
    private static baseUrl = `http://${process.env.REACT_APP_CLIENT_URL}:${process.env.REACT_APP_GAMESERVER_PORT}`;

    static GetFilms = async (title: string): Promise<HttpResultValue<GetFilmsResultsResponse>> => {
        return AppHttpClient.CallWithResponseValue<GetFilmsResultsResponse>(`${GetFilmsResultsRequest.Message}?title=${title}`);
    };

    static GetFilm = async (filmId: number): Promise<HttpResultValue<GetFilmResultResponse>> => {
        return AppHttpClient.CallWithResponseValue<GetFilmResultResponse>(`${GetFilmResultRequest.Message}?filmId=${filmId}`);
    };

    static GetWatchProviders = async (filmId: number): Promise<HttpResultValue<GetWatchProvidersResponse>> => {
        return AppHttpClient.CallWithResponseValue<GetWatchProvidersResponse>(`${GetWatchProvidersRequest.Message}?filmId=${filmId}`);
    };

    static async Call(url: string): Promise<HttpResult> {
        try {
            var response = await fetch(`${AppHttpClient.baseUrl}/${url}`, {
                method: 'GET'
            });

            if (response.ok) {
                return {
                    success: true
                };
            }

            const result: string = await response.json();
            return {
                success: false,
                errorMessage: result
            };
        } catch (error) {
            return {
                success: false,
                errorMessage: 'Un problème est survenu lors du call HTTP'
            };
        }
    }

    static async CallWithResponseValue<T>(url: string): Promise<HttpResultValue<T>> {
        try {
            console.log(`${AppHttpClient.baseUrl}/${url}`);
            var response = await fetch(`${AppHttpClient.baseUrl}/${url}`, {
                method: 'GET'
            });

            if (!response.ok) {
                const result: string = await response.json();
                return {
                    success: false,
                    errorMessage: result
                };
            }

            const result: T = await response.json();
            return {
                success: true,
                value: result
            };
        } catch (error) {
            return {
                success: false,
                errorMessage: 'Un problème est survenu lors du call HTTP'
            };
        }
    }
}

export type HttpResult = HttpError | HttpResultBasic;

export type HttpResultValue<T> = HttpError | HttpResultWithValue<T>;

type HttpError = {
    success: false;
    errorMessage: string;
};

type HttpResultWithValue<T> = {
    value: T;
} & HttpResultBasic;

type HttpResultBasic = {
    success: true;
};
