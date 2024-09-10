import { Box, Stack, Typography } from '@mui/material';
import FilmSearchButton from '../Home/FilmSearchButton';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import { useContext, useEffect, useState } from 'react';
import ResultFilmComponent from './ResultFilmComponent';
import Loader from '../Loaders/Loader';
import { FilmHelper, FilmResultModel } from '../../Shared/Models/FilmResultModel';
import { TvResultModel, TvHelper } from '../../Shared/Models/TvResultModel';
import { DataContext, DataProvider } from '../../Shared/DataContext';

const ResultPage = () => {
    const { film } = useParams();
    const dataContext = useContext(DataContext);

    const [films, setFilms] = useState<FilmResultModel[]>([]);

    useEffect(() => {
        const fetchFilmsAndTv = async () => {
            try {
                const resultMovies = await AppHttpClient.GetFilms(film as string, dataContext.includeAdult.toString() as string);

                if (!resultMovies.success) {
                    console.error('Une erreur est survenue lors de la récupération des films, mais la request est passée');
                    return;
                }

                const resultTv = await AppHttpClient.GetTvs(film as string, dataContext.includeAdult.toString() as string);

                if (!resultTv.success) {
                    console.error('Une erreur est survenue lors de la récupération des tv, mais la request est passée');
                    return;
                }

                const films = resultMovies.value.films.filter(FilmHelper.hasEnoughDatasFilm);
                const tvs = resultTv.value.tvs.filter(TvHelper.hasEnoughDatasTv).map(TvHelper.convertTvToFilm);

                setFilms([...films, ...tvs]);
            } catch (error) {
                console.error('Une erreur est survenue lors de la récupération des films et tv', error);
            }
        };

        fetchFilmsAndTv();
    }, [film]);

    return (
        <DataProvider>
            <Stack
                spacing={15}
                sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'start',
                    display: 'flex',
                    marginTop: '5%',
                    marginBottom: '5%',
                    overflow: 'hidden'
                }}
            >
                <Stack
                    display="flex"
                    spacing={10}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        alignItems: 'center',
                        justifyContent: 'start'
                    }}
                >
                    <Stack
                        display="flex"
                        spacing={2}
                        sx={{
                            width: '100%',
                            height: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '2%'
                        }}
                    >
                        <Typography variant="h1">VPN Country Finder</Typography>
                        <Typography variant="h3">Here are the results:</Typography>
                    </Stack>

                    <Box
                        sx={{
                            width: '50%',
                            height: 'auto',
                            paddingLeft: '3%',
                            display: 'flex'
                        }}
                    >
                        <FilmSearchButton />
                    </Box>
                </Stack>

                <Stack
                    display="flex"
                    spacing={5}
                    sx={{
                        width: '100%', // Ajustez la largeur pour qu'elle ne dépasse pas le conteneur
                        maxWidth: '80%', // Définissez une largeur maximale pour éviter le débordement
                        height: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {films.length === 0 ? (
                        <Loader message={'No film/serie found, try a different name'} />
                    ) : (
                        films.map((film, index) => <ResultFilmComponent key={index} film={film} />)
                    )}
                </Stack>
            </Stack>
        </DataProvider>
    );
};

export default ResultPage;
