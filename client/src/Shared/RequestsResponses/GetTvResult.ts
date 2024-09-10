import { TvResultModel } from './TvResultModel';

export class GetTvResultRequest {
    static Message = 'GetTvResultRequest';

    public tvId: number;

    constructor(tvId: number) {
        this.tvId = tvId;
    }
}

export class GetTvResultResponse {
    static Message = 'GetTvResultResponse';

    public tv: TvResultModel;

    constructor(tv: TvResultModel) {
        this.tv = tv;
    }
}
