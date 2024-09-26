import { Box, colors, Stack, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FilmResultModel } from '../../Shared/Models/FilmResultModel';

interface ResultFilmComponentProps {
    film: FilmResultModel;
}

const CustomTypography = styled(Typography)({
    height: '50%',
    overflowY: 'auto', // Affiche une scrollbar verticale si le texte dépasse
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    paddingRight: '5%',
    '&::-webkit-scrollbar': {
        width: '3px' // Largeur de la scrollbar
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1' // Couleur de la piste de la scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888', // Couleur du pouce de la scrollbar
        borderRadius: '10px' // Coins arrondis du pouce de la scrollbar
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555' // Couleur du pouce au survol
    }
});

const ResultFilmComponent = (props: ResultFilmComponentProps) => {
    const navigate = useNavigate();
    const [posterPath, setPosterPath] = useState(`https://image.tmdb.org/t/p/original${props.film.poster_path}`);

    const type = props.film.isTv === true ? 'tv' : 'film';

    const navigateToFilmPage = () => {
        navigate(`/${type}/${props.film.id}`);
    };

    useEffect(() => {
        if (props.film.poster_path === undefined || props.film.poster_path == null) {
            setPosterPath(
                'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
            );
            return;
        }

        setPosterPath(`https://image.tmdb.org/t/p/original${props.film.poster_path}`);
    }, [props.film.poster_path]);

    return (
        <Stack
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
                overflow: 'hidden',
                gap: {
                    xs: '1.3rem',
                    sm: '2rem',
                    md: '2rem',
                    lg: '1rem',
                    xl: '0rem'
                }
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
                sx={{
                    height: '100%',
                    width: '75%',
                    paddingBottom: '3%',
                    paddingTop: '1%',
                    overflow: 'hidden',
                    gap: {
                        xs: '1.75rem',
                        sm: '2rem',
                        md: '2.25rem',
                        lg: '2.25rem',
                        xl: '2.25rem'
                    }
                }}
            >
                <Stack
                    spacing={1}
                    sx={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: {
                                xs: '1.75rem',
                                sm: '2rem',
                                md: '2.25rem',
                                lg: '2.25rem',
                                xl: '2.25rem'
                            }
                        }}
                    >
                        {props.film.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: {
                                xs: '1rem'
                            }
                        }}
                    >
                        {props.film.release_date}
                    </Typography>
                </Stack>
                <CustomTypography
                    variant="h6"
                    sx={{
                        fontSize: {
                            xs: '1rem',
                            sm: '1rem',
                            md: '1.2rem',
                            lg: '1.2rem',
                            xl: '1.2rem'
                        }
                    }}
                >
                    {props.film.overview}
                </CustomTypography>
            </Stack>
        </Stack>
    );
};

export default ResultFilmComponent;
