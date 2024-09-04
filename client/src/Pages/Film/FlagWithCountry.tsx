import { Box, Stack, Typography } from '@mui/material';

interface FlagWithCountryProps {
    flagPath: string;
    countryName: string;
}

const FlagWithCountry = (props: FlagWithCountryProps) => {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                height: 'auto',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: 'flex',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                marginRight: '10%',
                marginBottom: '10%'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${props.flagPath})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '30%',
                    height: '100%',
                    paddingTop: '20%'
                }}
            />
            <Typography variant="h5">{props.countryName}</Typography>
        </Stack>
    );
};

export default FlagWithCountry;
