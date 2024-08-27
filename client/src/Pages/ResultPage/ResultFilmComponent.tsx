import { Box, colors, Stack, Typography } from '@mui/material';

const ResultFilmComponent = () => {
    return (
        <Stack
            spacing={1}
            direction="row"
            sx={{
                width: '100%',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '40px',
                padding: '0.5%'
            }}
        >
            <Box
                sx={{
                    backgroundImage:
                        'url(https://www.komar.de/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg)',
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
                    <Typography variant="h3">Avengers</Typography>
                    <Typography variant="h6">12/01/2024</Typography>
                </Stack>
                <Typography variant="h6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default ResultFilmComponent;
