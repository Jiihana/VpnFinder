import { Box, colors, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlagWithCountry from './FlagWithCountry';
import { FilmResultModel } from '../../Shared/FilmResultModel';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import ResultFilmComponent from '../ResultPage/ResultFilmComponent';
import { WatchProviderModel, FlatRate } from '../../Shared/WatchProvidersModel';

const FilmPage = () => {
    const [watchProviders, setWatchProviders] = useState<{ [countryCode: string]: WatchProviderModel }>();
    const [selectedWatchProvider, setSelectedWatchProvider] = useState('');
    const [watchProviderNames, setWatchProviderNames] = useState<string[]>([]);
    const { filmId } = useParams();

    const [film, setFilm] = useState<FilmResultModel>();

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const result = await AppHttpClient.GetFilm(+filmId!);

                if (!result.success) {
                    console.error('Result != succes, fetch films');
                    return;
                }
                setFilm(result.value.film);
            } catch (error) {
                console.error('Une erreur est survenue lors de la récupération du film', error);
            }
        };

        const fetchWatchProviders = async () => {
            try {
                const result = await AppHttpClient.GetWatchProviders(+filmId!);

                if (!result.success) {
                    console.error('Result != succes, fetch watch providers');
                    return;
                }

                setWatchProviders(result.value.providers);
            } catch (error) {
                console.error('Une erreur est survenue lors de la récupération du film', error);
            }
        };

        fetchFilm();
        fetchWatchProviders();
    }, [filmId]);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedWatchProvider(event.target.value as string);
    };

    useEffect(() => {
        const getWatchProvidersNames = (): string[] => {
            let providersNames: string[] = [];

            if (watchProviders == undefined) {
                return providersNames;
            }

            if (Object.keys(watchProviders).length === 0) {
                return providersNames;
            }

            Object.entries(watchProviders).forEach(([countryCode, providerModel]) => {
                providerModel.flatrate.forEach((flatrate) => {
                    if (!providersNames.includes(flatrate.provider_name)) {
                        console.log(`adding ${flatrate.provider_name}`);
                        providersNames.push(flatrate.provider_name);
                    }
                });
            });

            return providersNames;
        };

        setWatchProviderNames(getWatchProvidersNames());
    }, [watchProviders]);

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

    if (film == undefined || watchProviders == undefined) {
        return <Typography variant="h1">Loading infos</Typography>;
    }

    return (
        <Stack
            sx={{
                width: 'auto',
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
                <ResultFilmComponent film={film} />
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
                        <Select value={selectedWatchProvider} onChange={handleChange}>
                            {watchProviderNames.map((watchProviderName, index) => (
                                <MenuItem value={index}>{watchProviderName}</MenuItem>
                            ))}
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
