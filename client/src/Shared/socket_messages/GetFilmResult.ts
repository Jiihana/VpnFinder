import { FilmResultModel } from '../FilmResultModel';

export class GetFilmResultRequest {
    static Message = 'GetFilmResultRequest';

    public filmId: number;

    constructor(filmId: number) {
        this.filmId = filmId;
    }
}

export class GetFilmResultResponse {
    static Message = 'GetFilmResultResponse';

    public film: FilmResultModel;

    constructor(film: FilmResultModel) {
        this.film = film;
    }
}
