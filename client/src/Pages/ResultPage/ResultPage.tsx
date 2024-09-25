import { Box, colors, FormControlLabel, FormGroup, Stack, Switch, Typography } from '@mui/material';
import FilmSearchButton from '../Home/FilmSearchButton';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import { useContext, useEffect, useState } from 'react';
import ResultFilmComponent from './ResultFilmComponent';
import Loader from '../Loaders/Loader';
import { FilmHelper, FilmResultModel } from '../../Shared/Models/FilmResultModel';
import { TvHelper } from '../../Shared/Models/TvResultModel';
import { DataContext } from '../../Shared/DataContext';

const ResultPage = () => {
    const { film } = useParams();
    const dataContext = useContext(DataContext);

    const [films, setFilms] = useState<FilmResultModel[]>([]);
    const [seriesOnly, setSeriesOnly] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeriesOnly(event.target.checked);
    };

    useEffect(() => {
        const fetchFilmsAndTv = async () => {
            const films = seriesOnly ? [] : await fetchFilms();
            const tvs = await fetchTvs();

            setFilms([...films, ...tvs]);
        };

        fetchFilmsAndTv();
    }, [film, dataContext.includeAdult, seriesOnly]);

    const fetchFilms = async (): Promise<FilmResultModel[]> => {
        try {
            const resultFilms = await AppHttpClient.GetFilms(film as string, dataContext.includeAdult.toString() as string);

            if (!resultFilms.success) {
                console.error('Une erreur est survenue lors de la récupération des films, mais la requête est passée');
                return [];
            }

            return resultFilms.value.films.filter(FilmHelper.hasEnoughDatasFilm) || [];
        } catch (error) {
            console.error('Une erreur est survenue lors de la récupération des films', error);
            return [];
        }
    };

    const fetchTvs = async (): Promise<FilmResultModel[]> => {
        try {
            const resultTv = await AppHttpClient.GetTvs(film as string, dataContext.includeAdult.toString() as string);

            if (!resultTv.success) {
                console.error('Une erreur est survenue lors de la récupération des tv, mais la request est passée');
                return [];
            }

            return resultTv.value.tvs.filter(TvHelper.hasEnoughDatasTv).map(TvHelper.convertTvToFilm) || [];
        } catch (error) {
            console.error('Une erreur est survenue lors de la récupération des tv', error);
            return [];
        }
    };

    return (
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
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }}
            >
                <Box
                    sx={{
                        width: '80%',
                        maxWidth: '100%',
                        height: 'auto',
                        alignItems: 'center',
                        justifyContent: 'start',
                        display: 'flex'
                    }}
                >
                    <FormGroup sx={{ display: 'flex', width: '15%' }}>
                        <FormControlLabel
                            control={<Switch checked={seriesOnly} onChange={handleChange} />}
                            label="Series only"
                            labelPlacement="end"
                            sx={{ paddingLeft: '5%' }}
                        />
                    </FormGroup>
                </Box>
                <Stack
                    display="flex"
                    spacing={5}
                    sx={{
                        width: '100%',
                        maxWidth: '80%',
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
        </Stack>
    );
};

export default ResultPage;
