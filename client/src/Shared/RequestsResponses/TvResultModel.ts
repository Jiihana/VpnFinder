import { FilmResultModel } from './FilmResultModel';

export type TvResultModel = {
    name: string;
    first_air_date: string;
    overview: string;
    poster_path: string;
    id: number;
    isTv: true;
};

export class TvConverter {
    static convertTvToFilm(tv: TvResultModel): FilmResultModel {
        return {
            title: tv.name,
            release_date: tv.first_air_date,
            overview: tv.overview,
            poster_path: tv.poster_path,
            adult: false,
            id: tv.id,
            isTv: true
        };
    }
}
