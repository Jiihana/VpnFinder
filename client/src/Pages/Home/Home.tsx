import { Box, Stack, Typography, useTheme } from '@mui/material';
import FilmSearchButton from './FilmSearchButton';

const Accueil = () => {
    const theme = useTheme();

    return (
        <Stack
            spacing={15}
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'start',
                display: 'flex',
                marginTop: {
                    xs: '30%',
                    sm: '15%',
                    md: '15%',
                    lg: '5%',
                    xl: '4%'
                },
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
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {
                                xs: '2rem', // petit écran (mobile)
                                sm: '3rem', // écrans moyens
                                md: '4rem', // grands écrans
                                lg: '5rem', // très grands écrans
                                xl: '6rem' // écrans extra larges
                            }
                        }}
                    >
                        VPN Country Finder
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: {
                                xs: '1rem',
                                sm: '1.5rem',
                                md: '2rem',
                                lg: '2.5rem',
                                xl: '3rem'
                            }
                        }}
                    >
                        What do you want to watch today?
                    </Typography>
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
