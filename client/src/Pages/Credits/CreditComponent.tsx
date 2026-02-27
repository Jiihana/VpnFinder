import React from 'react';
import { Box, Typography, Button, Stack, useTheme, colors } from '@mui/material';

interface CreditComponentProps {
    title: string;
    description: string;
    logoPath: string;
}

export default function CreditComponent(props: CreditComponentProps) {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 3, md: 5 }}
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: 'flex',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '20px',
                padding: { xs: '4% 3%', sm: '2%', md: '1%' }
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${props.logoPath})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: { xs: '30%', sm: '15%', md: '10%' },
                    minWidth: { xs: '80px', sm: '80px' },
                    height: 'auto',
                    paddingTop: { xs: '15%', sm: '8%', md: '5%' }
                }}
            />
            <Stack
                spacing={1}
                sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: { xs: 'center', sm: 'start' },
                    justifyContent: 'space-between',
                    display: 'flex'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: '1rem',
                            sm: '1.2rem',
                            md: '1.5rem',
                            lg: '1.75rem'
                        },
                        textAlign: { xs: 'center', sm: 'left' }
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: {
                            xs: '0.8rem',
                            sm: '0.9rem',
                            md: '1rem'
                        },
                        textAlign: { xs: 'center', sm: 'left' },
                        wordBreak: 'break-word'
                    }}
                >
                    {props.description}
                </Typography>
            </Stack>
        </Stack>
    );
}
