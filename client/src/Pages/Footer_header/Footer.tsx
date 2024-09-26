import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '5vh',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'primary.dark',
                padding: '0.5%'
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    width: '50%',
                    fontSize: {
                        xs: '0.6rem', // petit écran (mobile)
                        sm: '0.6rrem', // écrans moyens
                        md: '0.8rem', // grands écrans
                        lg: '0.8rem', // très grands écrans
                        xl: '0.8rem' // écrans extra larges
                    }
                }}
            >
                © 2024 Eve Bouchard & Nicolas Canon, Inc All rights reserved
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'right',
                    width: '50%',
                    fontSize: {
                        xs: '0.6rem', // petit écran (mobile)
                        sm: '0.6rrem', // écrans moyens
                        md: '0.8rem', // grands écrans
                        lg: '0.8rem', // très grands écrans
                        xl: '0.8rem' // écrans extra larges
                    }
                }}
            >
                This product uses the TMDB API but is not endorsed or certified by TMDB
            </Typography>
        </Box>
    );
};

export default Footer;
