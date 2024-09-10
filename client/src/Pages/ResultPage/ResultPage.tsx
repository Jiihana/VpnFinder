import { Box, Stack, Typography } from '@mui/material';
import FilmSearchButton from '../Home/FilmSearchButton';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import { FilmResultModel } from '../../Shared/RequestsResponses/FilmResultModel';
import { useEffect, useState } from 'react';
import ResultFilmComponent from './ResultFilmComponent';
import Loader from '../Loaders/Loader';

const ResultPage = () => {
    const { film } = useParams();

    const [films, setFilms] = useState<FilmResultModel[]>([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const result = await AppHttpClient.GetFilms(film as string);

                if (!result.success) {
                    console.error('Une erreur est survenue lors de la récupération des films, mais la request est passée');
                    return;
                }

                setFilms(result.value.films);
            } catch (error) {
                console.error('Une erreur est survenue lors de la récupération des films', error);
            }
        };

        fetchFilms();
    }, [film]);

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
    );
};

export default ResultPage;
