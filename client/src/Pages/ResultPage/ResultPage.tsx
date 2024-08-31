import { Box, Stack, Typography } from '@mui/material';
import FilmSearchButton from '../Home/FilmSearchButton';
import ResultFilmComponent from './ResultFilmComponent';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import { FilmResultModel } from '../../Shared/FilmResultModel';
import { useEffect, useState } from 'react';

const ResultPage = () => {
    const { film } = useParams();

    const [films, setFilms] = useState<FilmResultModel[]>([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const result = await AppHttpClient.GetFilms(film as string);
                if (!result.success) {
                    console.error('PROBLEME OILALALA');
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
                display: 'flex'
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
                    <Typography variant="h1">VPN Finder</Typography>
                    <Typography variant="h3">Lorem ipsum pouet pouet</Typography>
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
                    width: '80%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {films.map((film, index) => (
                    <ResultFilmComponent key={index} film={film} />
                ))}
            </Stack>
        </Stack>
    );
};

export default ResultPage;
