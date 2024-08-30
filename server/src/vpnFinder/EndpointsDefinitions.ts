import { FilmResultModel } from '../../../client/src/Shared/FilmResultModel';
import { ResultatValue } from './ErrorModel';

export class EndpointsDefinitions {
    const fetch = require('node-fetch');

    public async GetFilmsResults(title:string): Promise<ResultatValue<FilmResultModel>> {
        const allMoviesFromKeyword = await _httpClient.GetFromJsonAsync<MovieDatabaseRequestResponseList<Movie>>($"3/search/movie?query={title}");
        const allSeriesFromKeyword = await _httpClient.GetFromJsonAsync<MovieDatabaseRequestResponseList<Tv>>($"3/search/tv?query={title}");

        try {
            const response = await fetch(`https://trouve-mot.fr/api/sizemax/9/`);

            if (!response.ok) {
                return {
                    success: false,
                    message: `Un problème est survenu lors de l'appel à https://trouve-mot.fr/api/ pour modifier 1 mot`
                };
            }

            const result = (await response.json()) as wordApiDto[];

            this.ChosenWords.forEach((chosenWord, index) => {
                if (chosenWord == word) {
                    this.ChosenWords[index] = result[0].name.charAt(0).toUpperCase() + result[0].name.slice(1);
                }
            });

            return {
                value: result[0].name.charAt(0).toUpperCase() + result[0].name.slice(1),
                success: true
            };
        } catch (e) {
            console.log(e);
            return {
                success: false,
                message: `Un problème est survenu lors de l'appel à https://trouve-mot.fr/api/ pour modifier 1 mot`
            };
        }
    }
}
