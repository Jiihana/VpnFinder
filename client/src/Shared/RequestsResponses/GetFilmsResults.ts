import { FilmResultModel } from '../Models/FilmResultModel';

export class GetFilmsResultsRequest {
    static Message = 'GetFilmsResultsRequest';

    public filmToSearch: string;

    constructor(filmToSearch: string) {
        this.filmToSearch = filmToSearch;
    }
}

export class GetFilmsResultsResponse {
    static Message = 'GetFilmsResultsResponse';

    public films: FilmResultModel[];

    constructor(films: FilmResultModel[]) {
        this.films = films;
    }
}
