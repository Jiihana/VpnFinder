import { Box, colors, Stack, Typography } from '@mui/material';
import FilmSearchButton from './FilmSearchButton';

const Accueil = () => {
    return (
        <Stack
            sx={{
                width: '35%',
                height: '35%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: colors.blue[200],
                marginRight: '5%'
            }}
            display="flex"
        >
            <Stack
                spacing={2}
                sx={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'start',
                    justifyContent: 'flex-start'
                }}
                display="flex"
            >
                <Typography variant="h1">VPN Finder</Typography>
                <Typography variant="h3">Lorem ipsum pouet pouet</Typography>
            </Stack>
            <FilmSearchButton></FilmSearchButton>
        </Stack>
    );
};

export default Accueil;
