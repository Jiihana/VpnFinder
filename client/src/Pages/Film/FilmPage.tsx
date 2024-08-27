import { Box, colors, Stack, Typography } from '@mui/material';
import FilmSearchButton from '../Home/FilmSearchButton';
import ResultFilmComponent from '../ResultPage/ResultFilmComponent';

const FilmPage = () => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            display="flex"
            spacing={25}
        >
            <Stack
                display="flex"
                sx={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                spacing={10}
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
                        paddingLeft: '8%'
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
                <ResultFilmComponent />
            </Stack>
        </Stack>
    );
};

export default FilmPage;
