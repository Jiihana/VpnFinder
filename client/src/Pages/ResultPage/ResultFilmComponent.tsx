import { Box, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FilmResultModel } from '../../Shared/RequestsResponses/FilmResultModel';
import { useEffect, useState } from 'react';

interface ResultFilmComponentProps {
    film: FilmResultModel;
}

const ResultFilmComponent = (props: ResultFilmComponentProps) => {
    const navigate = useNavigate();
    const [posterPath, setPosterPath] = useState(`https://image.tmdb.org/t/p/original${props.film.poster_path}`);

    const navigateToFilmPage = () => {
        navigate(`/film/${props.film.id}`);
    };

    useEffect(() => {
        if (props.film.poster_path == undefined || props.film.poster_path == null) {
            setPosterPath(
                'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
            );
        }
    }, [props.film.poster_path]);

    return (
        <Stack
            spacing={1}
            direction="row"
            onClick={navigateToFilmPage}
            sx={{
                width: '100%',
                height: '30vh',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '20px',
                padding: '0.5%',
                cursor: 'pointer',
                boxSizing: 'border-box',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url('${posterPath}')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '20%',
                    height: '100%'
                }}
            />

            <Stack
                spacing={1}
                sx={{
                    height: '100%',
                    width: '75%',
                    paddingBottom: '3%',
                    paddingTop: '1%',
                    overflow: 'hidden'
                }}
            >
                <Stack
                    spacing={0.5}
                    sx={{
                        height: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden'
                    }}
                >
                    <Typography variant="h4" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {props.film.title}
                    </Typography>
                    <Typography variant="body1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {props.film.release_date}
                    </Typography>
                </Stack>
                <Typography
                    variant="h6"
                    sx={{
                        height: '50%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {props.film.overview}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default ResultFilmComponent;
