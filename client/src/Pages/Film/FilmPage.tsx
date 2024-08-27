import { Box, colors, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import ResultFilmComponent from '../ResultPage/ResultFilmComponent';
import React from 'react';
import FlagWithCountry from './FlagWithCountry';

const FilmPage = () => {
    const [platform, setPlatform] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setPlatform(event.target.value as string);
    };

    const numberOfCountries = 20;

    const items = [];
    for (let index = 0; index < numberOfCountries; index++) {
        items.push(
            <Grid
                item
                xs={2}
                key={index}
                sx={{
                    alignItems: 'flex-end',
                    display: 'flex'
                }}
            >
                <FlagWithCountry />
            </Grid>
        );
    }

    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2%'
            }}
            display="flex"
            spacing={15}
        >
            <Box
                display="flex"
                sx={{
                    width: '60%',
                    height: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ResultFilmComponent />
            </Box>

            <Stack
                display="flex"
                spacing={10}
                sx={{
                    width: '90%',
                    height: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(1, 1, 1, 0.5)',
                    border: '2px solid white',
                    borderRadius: '10px',
                    padding: '1%'
                }}
            >
                <Stack
                    display="flex"
                    spacing={4}
                    sx={{
                        width: '90%',
                        height: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >
                    <Typography variant="h6">It's available to watch with a subscription on these streaming plateforms/countries :)</Typography>
                    <FormControl
                        sx={{
                            width: '20%'
                        }}
                    >
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={platform} onChange={handleChange}>
                            <MenuItem value={10}>Netflix</MenuItem>
                            <MenuItem value={20}>Paramount</MenuItem>
                            <MenuItem value={30}>Disney+</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Grid
                    container
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        width: '100%',
                        height: 'auto'
                    }}
                >
                    {items}
                </Grid>
            </Stack>
        </Stack>
    );
};

export default FilmPage;
