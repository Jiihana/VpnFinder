import { Box, colors, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlagWithCountry from './FlagWithCountry';
import { FilmResultModel } from '../../Shared/FilmResultModel';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import ResultFilmComponent from '../ResultPage/ResultFilmComponent';
import { WatchProviderModel } from '../../Shared/WatchProvidersModel';

const FilmPage = () => {
    const [watchProviders, setWatchProviders] = useState<{ [countryCode: string]: WatchProviderModel }>();
    const [watchProviderNames, setWatchProviderNames] = useState<string[]>([]);
    const [selectedWatchProvider, setSelectedWatchProvider] = useState('');
    const [availableCountries, setAvailableCountries] = useState<React.ReactNode[]>([]);
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
        console.log(event.target.value as string);
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
                if (providerModel.flatrate == undefined) {
                    return;
                }

                if (providerModel.flatrate.length == 0) {
                    return;
                }

                providerModel.flatrate.forEach((flatrate) => {
                    if (!providersNames.includes(flatrate.provider_name)) {
                        providersNames.push(flatrate.provider_name);
                    }
                });
            });

            return providersNames;
        };

        setWatchProviderNames(getWatchProvidersNames());
    }, [watchProviders]);

    const numberOfCountries = 20;

    useEffect(() => {
        const flagWithCountryComponents: React.ReactNode[] = [];

        if (watchProviders == undefined) {
            return;
        }

        if (Object.keys(watchProviders).length === 0) {
            return;
        }

        Object.entries(watchProviders).forEach(([countryCode, providerModel]) => {
            if (providerModel.flatrate == undefined) {
                return;
            }

            if (providerModel.flatrate.length == 0) {
                return;
            }

            providerModel.flatrate.forEach((flatrate) => {
                if (flatrate.provider_name == selectedWatchProvider) {
                    flagWithCountryComponents.push(
                        <Grid
                            item
                            key={countryCode}
                            xs={2}
                            sx={{
                                alignItems: 'flex-end',
                                display: 'flex'
                            }}
                        >
                            <FlagWithCountry
                                flagPath={
                                    'https://lesplusbeauxdrapeauxdumonde.com/wp-content/uploads/2017/03/netherlands-26885_1280.png?w=601&h=402)'
                                }
                                countryName={countryCode}
                            />
                        </Grid>
                    );
                }
            });
        });

        setAvailableCountries(flagWithCountryComponents);
    }, [selectedWatchProvider]);

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
                    {watchProviderNames.length != 0 ? (
                        <>
                            <Typography variant="h6">
                                It's available to watch with a subscription on these streaming plateforms/countries :)
                            </Typography>
                            <FormControl
                                sx={{
                                    width: '20%'
                                }}
                            >
                                <Select value={selectedWatchProvider} onChange={handleChange}>
                                    {watchProviderNames.map((watchProviderName, index) => (
                                        <MenuItem key={index} value={watchProviderName}>
                                            {watchProviderName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </>
                    ) : (
                        <Typography variant="h6">Your film isn't on any streaming platform :(</Typography>
                    )}
                </Stack>

                {availableCountries.length != 0 ? (
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
                        {availableCountries}
                    </Grid>
                ) : (
                    <></>
                )}
            </Stack>
        </Stack>
    );
};

export default FilmPage;
