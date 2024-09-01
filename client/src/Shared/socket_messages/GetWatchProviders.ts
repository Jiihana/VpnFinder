import { WatchProviderModel } from '../WatchProvidersModel';

export class GetWatchProvidersRequest {
    static Message = 'GetWatchProvidersRequest';

    public filmId: number;

    constructor(filmId: number) {
        this.filmId = filmId;
    }
}

export class GetWatchProvidersResponse {
    static Message = 'GetWatchProvidersResponse';

    public providers: { [countryCode: string]: WatchProviderModel };

    constructor(providers: { [countryCode: string]: WatchProviderModel }) {
        this.providers = providers;
    }
}
