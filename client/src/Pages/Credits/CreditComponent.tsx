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
            direction="row"
            spacing={5}
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: 'flex',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '20px',
                padding: '2%'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${props.logoPath})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '10%',
                    height: 'auto',
                    paddingTop: '2%'
                }}
            />
            <Stack
                spacing={5}
                sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    display: 'flex'
                }}
            >
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="h6">{props.description}</Typography>
            </Stack>
        </Stack>
    );
}
