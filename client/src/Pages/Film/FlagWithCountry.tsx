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

    const maxLength = props.maxLength || 20;

    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                height: 'auto',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: 'flex',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                borderRadius: '8px',
                padding: '4px 8px',
                marginBottom: '8px'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${props.flagPath})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '30px',
                    minWidth: '30px',
                    height: '20px'
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    fontSize: {
                        xs: '0.8rem',
                        sm: '0.9rem',
                        md: '1rem',
                        lg: '1rem',
                        xl: '1rem'
                    },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {truncateText(props.countryName, maxLength)}
            </Typography>
        </Stack>
    );
};

export default FlagWithCountry;
