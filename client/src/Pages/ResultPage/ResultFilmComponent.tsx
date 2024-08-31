import { Box, colors, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmResultModel } from '../../Shared/FilmResultModel';

interface ResultFilmComponentProps {
    film: FilmResultModel;
}

const ResultFilmComponent = (props: ResultFilmComponentProps) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [overview, setOverview] = useState('');
    const [date, setDate] = useState('');
    const [posterPath, setPosterPath] = useState('');

    const navigateToFilmPage = () => {
        console.log('navigate to film');
        navigate(`/film/${name}`);
    };

    useEffect(() => {
        setName(props.film.Title);
    }, [props.film.Title]);

    useEffect(() => {
        setOverview(props.film.Overview);
    }, [props.film.Overview]);

    useEffect(() => {
        setDate(props.film.ReleaseDate);
    }, [props.film.ReleaseDate]);

    useEffect(() => {
        setPosterPath(props.film.PosterPath);
    }, [props.film.PosterPath]);

    return (
        <Stack
            spacing={1}
            direction="row"
            onClick={navigateToFilmPage}
            sx={{
                width: '100%',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '20px',
                padding: '0.5%',
                cursor: 'pointer'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${{ posterPath }})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '20%'
                }}
            />

            <Stack
                spacing={5}
                sx={{
                    height: '100%',
                    width: '80%',
                    paddingBottom: '3%',
                    paddingTop: '1%'
                }}
            >
                <Stack>
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="h6">{date}</Typography>
                </Stack>
                <Typography variant="h6">{overview}</Typography>
            </Stack>
        </Stack>
    );
};

export default ResultFilmComponent;
