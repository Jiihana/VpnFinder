import { Box, Stack, Typography } from '@mui/material';

interface FlagWithCountryProps {
    flagPath: string;
    countryName: string;
    maxLength?: number; // Optionnel, pour définir la limite du texte si nécessaire
}

const FlagWithCountry = (props: FlagWithCountryProps) => {
    // Limite le texte à un certain nombre de caractères
    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const maxLength = props.maxLength || 10; // Définir la longueur maximale par défaut à 10

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
            <Typography
                variant="h5"
                sx={{
                    fontSize: {
                        xs: '1rem',
                        sm: '1.2rem',
                        md: '1.2rem',
                        lg: '1.2rem',
                        xl: '1.2rem'
                    },
                    whiteSpace: 'nowrap', // Empêche le texte de s'étendre sur plusieurs lignes
                    overflow: 'hidden', // Masque le débordement
                    textOverflow: 'ellipsis' // Ajoute des points de suspension si nécessaire
                }}
            >
                {truncateText(props.countryName, maxLength)}
            </Typography>
        </Stack>
    );
};

export default FlagWithCountry;
