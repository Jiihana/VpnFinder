import { Box, colors, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import ResultFilmComponent from '../ResultPage/ResultFilmComponent';

const FlagWithCountry = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                height: 'auto',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                marginRight: '10%',
                marginBottom: '10%'
            }}
        >
            <Box
                sx={{
                    backgroundImage: 'url(https://lesplusbeauxdrapeauxdumonde.com/wp-content/uploads/2017/03/netherlands-26885_1280.png?w=601&h=402)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '30%',
                    height: '100%',
                    paddingTop: '30%'
                }}
            />
            <Typography variant="h5">Netherlands</Typography>
        </Stack>
    );
};

export default FlagWithCountry;
