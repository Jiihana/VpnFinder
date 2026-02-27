import React from 'react';
import { Box, Typography, Button, Stack, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function About() {
    const theme = useTheme();

    const steps = [
        {
            icon: <SearchIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: theme.palette.primary.light }} />,
            title: 'Search',
            description: 'Enter the name of the movie or series you want to watch.'
        },
        {
            icon: <PublicIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: theme.palette.primary.light }} />,
            title: 'Discover',
            description: 'See which countries offer it on each streaming platform.'
        },
        {
            icon: <LiveTvIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: theme.palette.primary.light }} />,
            title: 'Watch',
            description: 'Set your VPN to the right country and enjoy.'
        }
    ];

    return (
        <Stack
            spacing={5}
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'flex-end',
                display: 'flex',
                marginTop: {
                    xs: '10%',
                    sm: '15%',
                    md: '10%',
                    lg: '8%'
                },
                paddingBottom: {
                    xs: '10%',
                    sm: '10%',
                    xl: '5%'
                }
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4rem',
                        lg: '5rem',
                        xl: '6rem'
                    }
                }}
            >
                About
            </Typography>

            <Stack
                sx={{
                    width: '80%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    backgroundColor: 'rgba(1, 1, 1, 0.5)',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: { xs: '5%', md: '3%' }
                }}
                spacing={3}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        textAlign: 'center',
                        lineHeight: 1.8
                    }}
                >
                    A movie or series you want to watch isn't available on your streaming platform?
                    <br />
                    It might be available in another country.{' '}
                    <span style={{ color: theme.palette.primary.light }}>VPN Country Finder</span> helps you find where.
                </Typography>
            </Stack>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                sx={{
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }}
            >
                {steps.map((step, index) => (
                    <Stack
                        key={index}
                        spacing={2}
                        sx={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            backgroundColor: 'rgba(1, 1, 1, 0.5)',
                            border: '2px solid white',
                            borderRadius: '20px',
                            padding: { xs: '5%', md: '3%' }
                        }}
                    >
                        {step.icon}
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                fontWeight: 600,
                                color: theme.palette.primary.light
                            }}
                        >
                            {step.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                textAlign: 'center',
                                opacity: 0.9
                            }}
                        >
                            {step.description}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Stack
                spacing={3}
                sx={{
                    width: '80%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(1, 1, 1, 0.5)',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: { xs: '5%', md: '3%' }
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
                        textAlign: 'center'
                    }}
                >
                    If you find this tool useful, consider supporting us.
                </Typography>
                <Box component="form" action="https://www.paypal.com/donate" method="post" target="_top" sx={{ textAlign: 'center' }}>
                    <input type="hidden" name="business" value="JE5LDTZSQW7BU" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="item_name" value="Thanks for your support!" />
                    <input type="hidden" name="currency_code" value="EUR" />
                    <Button type="submit" variant="contained" color="primary">
                        <img src="https://www.paypalobjects.com/en_US/FR/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal button" />
                    </Button>
                    <img alt="" src="https://www.paypal.com/en_FR/i/scr/pixel.gif" width="1" height="1" />
                </Box>
            </Stack>
        </Stack>
    );
}
