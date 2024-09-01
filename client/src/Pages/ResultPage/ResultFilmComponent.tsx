import { Box, colors, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FilmResultModel } from '../../Shared/RequestsResponses/FilmResultModel';

interface ResultFilmComponentProps {
    film: FilmResultModel;
}

const ResultFilmComponent = (props: ResultFilmComponentProps) => {
    const navigate = useNavigate();

    const navigateToFilmPage = () => {
        console.log('navigate to film');
        navigate(`/film/${props.film.id}`);
    };

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
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${props.film.poster_path}')`,
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
                    <Typography variant="h3">{props.film.title}</Typography>
                    <Typography variant="h6">{props.film.release_date}</Typography>
                </Stack>
                <Typography variant="h6">{props.film.overview}</Typography>
            </Stack>
        </Stack>
    );
};

export default ResultFilmComponent;
