import React from 'react';
import { Box, Typography, Button, Stack, useTheme } from '@mui/material';

export default function About() {
    const theme = useTheme();

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
                        xs: '2rem', // petit écran (mobile)
                        sm: '3rem', // écrans moyens
                        md: '4rem', // grands écrans
                        lg: '5rem', // très grands écrans
                        xl: '6rem' // écrans extra larges
                    }
                }}
            >
                About VPN Country Finder
            </Typography>

            <Stack
                sx={{
                    width: '80%',
                    height: 'auto',
                    alignItems: 'start',
                    justifyContent: 'center',
                    display: 'flex',
                    backgroundColor: 'rgba(1, 1, 1, 0.5)',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: '2%'
                }}
                spacing={6}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: {
                            xs: '1.5rem' // petit écran (mobile)
                        }
                    }}
                >
                    You are sitting on your sofa, ready to watch a [movie/series]. You open your favorite streaming platform, but{' '}
                    <span style={{ color: theme.palette.secondary.light }}> it's not in the catalog!</span>
                </Typography>
                <Typography variant="h5">
                    You don't want to resort to piracy, and you're not keen on buying it. Maybe it's{' '}
                    <span style={{ color: theme.palette.secondary.light }}> available in another country</span> on the same streaming platform?
                </Typography>
                <Typography variant="h5">Find out where you should set your VPN to access it!</Typography>
            </Stack>

            <Stack
                spacing={5}
                sx={{
                    width: '80%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(1, 1, 1, 0.5)',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: '2%'
                }}
            >
                <Typography variant="h5">
                    VPN Country Finder was made so <span style={{ color: theme.palette.secondary.main }}>you don't waste any time</span> searching the
                    internet while <span style={{ color: theme.palette.secondary.main }}> your crush is waiting on the sofa</span>.
                </Typography>

                <Stack
                    spacing={2}
                    sx={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography variant="h5">Consider donating if you liked it :)</Typography>
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
        </Stack>
    );
}
