export class GetFilmsResultsRequest {
    static Message = 'GetFilmsResultsRequest';

    public filmToSearch: string;

    constructor(filmToSearch: string) {
        this.filmToSearch = filmToSearch;
    }
}

export class GetFilmsResultsResponse {
    static Message = 'GetFilmsResultsResponse';

    public films: FilmResultType[];

    constructor(films: FilmResultType[]) {
        this.films = films;
    }
}
