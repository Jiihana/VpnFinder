export class AppHttpClient {
    constructor() {}
}

export class MotRigoloClient {
    private static baseUrl = 'http://localhost:32769';

    static async Call(url: string, headers: Record<string, string> = {}): Promise<HttpResult> {
        try {
            var response = await fetch(`${MotRigoloClient.baseUrl}/${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                }
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

    static async CallWithResponseValue<T>(url: string, headers: Record<string, string> = {}): Promise<HttpResultValue<T>> {
        try {
            var response = await fetch(`${MotRigoloClient.baseUrl}/${url}`, {
                method: 'GET',
                headers: {
                    ...headers
                }
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
