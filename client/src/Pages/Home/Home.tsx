import { Box, colors, Stack, Typography } from '@mui/material';
import FilmSearchButton from './FilmSearchButton';

const Accueil = () => {
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
                    <Typography variant="h1">VPN Finder</Typography>
                    <Typography variant="h3">What do you want to watch today?</Typography>
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
        </Stack>
    );
};

export default Accueil;
