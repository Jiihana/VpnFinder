import { Box, Button, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'primary.dark',
                padding: '0.5%'
            }}
        >
            <Typography variant="body2">© 2024 Eve Bouchard & Nicolas Canon, Inc All rights reserved</Typography>
            <Typography variant="body2">This product uses the TMDB API but is not endorsed or certified by TMDB</Typography>
        </Box>
    );
};

export default Footer;
