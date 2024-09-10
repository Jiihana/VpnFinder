export type FilmResultModel = {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    adult: boolean;
    id: number;
    isTv: boolean;
};

export class FilmHelper {
    static hasEnoughDatasFilm = (film: FilmResultModel) => {
        let filledData = 0;

        if (film.overview != undefined && film.overview != '' && film.overview != null) {
            filledData++;
        }

        if (film.title != undefined && film.title != '' && film.title != null) {
            filledData++;
        }

        if (film.release_date != undefined && film.release_date != '' && film.release_date != null) {
            filledData++;
        }

        if (film.poster_path != undefined && film.poster_path != '' && film.poster_path != null) {
            filledData++;
        }

        return filledData >= 2;
    };
}
