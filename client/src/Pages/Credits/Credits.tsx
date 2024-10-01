import React from 'react';
import { Box, Typography, Button, Stack, useTheme, colors } from '@mui/material';
import CreditComponent from './CreditComponent';

export default function Credits() {
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
                        xs: '2rem', // petit écran (mobile)
                        sm: '3rem', // écrans moyens
                        md: '4rem', // grands écrans
                        lg: '5rem', // très grands écrans
                        xl: '6rem' // écrans extra larges
                    }
                }}
            >
                Thanks to:
            </Typography>
            <Stack
                spacing={5}
                sx={{
                    width: '95%',
                    height: 'auto',
                    alignItems: 'start',
                    justifyContent: 'start',
                    display: 'flex'
                }}
            >
                <CreditComponent
                    title={'Data from The Movie Database'}
                    description={'This product uses the TMDB API but is not endorsed or certified by TMDB.'}
                    logoPath={
                        'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                    }
                />
                <CreditComponent
                    title={'Watch providers data from JustWatch through TMDB API.'}
                    description={'This product uses the data from JustWatch through TMDB API but is not endorsed or certified by JustWatch.'}
                    logoPath={'https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp'}
                />

                <CreditComponent
                    title={'Flags from flagsapi.com'}
                    description={'Copyright (c) 2017 Go Squared Ltd. http://www.gosquared.com/'}
                    logoPath={'https://flagsapi.com/img/logo-countryflags.png'}
                />
                <CreditComponent
                    title={'Background image by @starline on Freepik'}
                    description={'https://www.flaticon.com/'}
                    logoPath={'https://logowik.com/content/uploads/images/freepik-new-20237240.logowik.com.webp'}
                />

                <CreditComponent
                    title={'Tab icon by Freepik on Freepik'}
                    description={'https://www.flaticon.com/free-icons/travel'}
                    logoPath={'https://logowik.com/content/uploads/images/freepik-new-20237240.logowik.com.webp'}
                />
            </Stack>
        </Stack>
    );
}
