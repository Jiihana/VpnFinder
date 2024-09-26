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
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'start',
                display: 'flex',
                marginTop: {
                    xs: '15%',
                    sm: '15%',
                    md: '10%',
                    lg: '5%',
                    xl: '5%'
                },
                gap: {
                    xs: 5,
                    sm: 9,
                    md: 11,
                    lg: 13,
                    xl: 15
                },
                marginBottom: {
                    xs: '18%',
                    sm: '12%',
                    md: '9%',
                    lg: '7%',
                    xl: '5%'
                },
                overflow: 'hidden'
            }}
        >
            <Stack
                display="flex"
                sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'start',
                    gap: {
                        xs: 4,
                        sm: 4,
                        md: 6,
                        lg: 8,
                        xl: 10
                    }
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
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {
                                xs: '2rem',
                                sm: '3rem',
                                md: '4rem',
                                lg: '5rem',
                                xl: '6rem'
                            }
                        }}
                    >
                        VPN Country Finder
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: '1rem',
                                sm: '1.5rem',
                                md: '2rem',
                                lg: '2.5rem',
                                xl: '3rem'
                            }
                        }}
                    >
                        Here are the results:
                    </Typography>
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
                    <FormGroup sx={{ display: 'flex', width: '100%' }}>
                        <FormControlLabel
                            control={<Switch checked={seriesOnly} onChange={handleChange} />}
                            label="Series only"
                            labelPlacement="end"
                            sx={{ paddingLeft: '1%' }}
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
