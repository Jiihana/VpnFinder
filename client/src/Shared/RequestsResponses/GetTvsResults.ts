import { TvResultModel } from './TvResultModel';

export class GetTvResultsRequest {
    static Message = 'GetTvResultsRequest';

    public tvToSearch: string;

    constructor(tvToSearch: string) {
        this.tvToSearch = tvToSearch;
    }
}

export class GetTvResultsResponse {
    static Message = 'GetTvResultsResponse';

    public tvs: TvResultModel[];

    constructor(tvs: TvResultModel[]) {
        this.tvs = tvs;
    }
}
