import { Box, colors, Stack, Typography } from '@mui/material';
import FilmSearchButton from './FilmSearchButton';

const Accueil = () => {
    return (
        <Box
            display="flex"
            sx={{
                minHeight: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'start',
                marginTop: '5%'
            }}
        >
            <Stack
                spacing={20}
                sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '5%',
                    display: 'flex'
                }}
            >
                <Stack
                    spacing={1}
                    sx={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}
                >
                    <Typography variant="h1">VPN Finder</Typography>
                    <Typography variant="h3">What do you want to watch today?</Typography>
                </Stack>

                <Stack
                    spacing={20}
                    sx={{
                        width: '50%',
                        height: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '5%',
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            paddingLeft: '5%',
                            display: 'flex'
                        }}
                    >
                        <FilmSearchButton />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Accueil;
