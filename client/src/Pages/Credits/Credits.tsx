import React from 'react';
import { Typography, Stack, useTheme, Link, Button } from '@mui/material';
import CreditComponent from './CreditComponent';

const PERSONAL_SITE_URL = '#'; // TODO: replace with actual URL

export default function Credits() {
    const theme = useTheme();

    return (
        <Stack
            spacing={5}
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
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
                Credits
            </Typography>

            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <Typography
                    sx={{
                        fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' },
                        textAlign: 'center',
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.4)'
                    }}
                >
                    Made by{' '}
                    <span style={{ color: theme.palette.primary.light, fontWeight: 600 }}>Jihana</span>
                </Typography>
                <Button
                    variant="contained"
                    href={PERSONAL_SITE_URL}
                    target="_blank"
                    size="small"
                    sx={{
                        textTransform: 'none',
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        borderRadius: '20px',
                        paddingX: 3
                    }}
                >
                    My website
                </Button>
            </Stack>

            <Stack
                spacing={5}
                sx={{
                    width: '80%',
                    height: 'auto',
                    alignItems: 'start',
                    justifyContent: 'start',
                    display: 'flex'
                }}
            >
                <CreditComponent
                    title={'The Movie Database'}
                    description={'This product uses the TMDB API but is not endorsed or certified by TMDB.'}
                    logoPath={
                        'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                    }
                />
                <CreditComponent
                    title={'JustWatch'}
                    description={'Watch providers data from JustWatch through TMDB API. Not endorsed or certified by JustWatch.'}
                    logoPath={'https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp'}
                />
                <CreditComponent
                    title={'flagsapi.com'}
                    description={'Copyright (c) 2017 Go Squared Ltd.'}
                    logoPath={'https://flagsapi.com/img/logo-countryflags.png'}
                />
                <CreditComponent
                    title={'Freepik'}
                    description={'Background image by @starline and tab icon from Freepik.'}
                    logoPath={'https://logowik.com/content/uploads/images/freepik-new-20237240.logowik.com.webp'}
                />
            </Stack>
        </Stack>
    );
}
