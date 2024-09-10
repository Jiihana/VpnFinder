import { FilmResultModel } from './FilmResultModel';

export type TvResultModel = {
    name: string;
    first_air_date: string;
    overview: string;
    poster_path: string;
    id: number;
    isTv: true;
};

export class TvHelper {
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

    static hasEnoughDatasTv = (film: TvResultModel) => {
        let filledData = 0;

        if (film.overview != undefined && film.overview != '' && film.overview != null) {
            filledData++;
        }

        if (film.name != undefined && film.name != '' && film.name != null) {
            filledData++;
        }

        if (film.first_air_date != undefined && film.first_air_date != '' && film.first_air_date != null) {
            filledData++;
        }

        if (film.poster_path != undefined && film.poster_path != '' && film.poster_path != null) {
            filledData++;
        }

        return filledData >= 2;
    };
}
