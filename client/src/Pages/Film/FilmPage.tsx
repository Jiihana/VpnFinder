import { Box, colors, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlagWithCountry from './FlagWithCountry';
import { useParams } from 'react-router-dom';
import { AppHttpClient } from '../../HttpClient/AppHttpClient';
import ResultFilmComponent from '../ResultPage/ResultFilmComponent';
import CountriesByCode from '../../Shared/Misc/CountriesByCode';
import Loader from '../Loaders/Loader';
import { FilmResultModel } from '../../Shared/Models/FilmResultModel';
import { TvHelper } from '../../Shared/Models/TvResultModel';
import { WatchProviderModel } from '../../Shared/Models/WatchProvidersModel';

const FilmPage = () => {
    const [watchProviders, setWatchProviders] = useState<{ [countryCode: string]: WatchProviderModel }>();
    const [watchProviderNames, setWatchProviderNames] = useState<string[]>([]);
    const [selectedWatchProvider, setSelectedWatchProvider] = useState('');
    const [availableCountries, setAvailableCountries] = useState<React.ReactNode[]>([]);
    const { filmId } = useParams();
    const { type } = useParams();

    const [film, setFilm] = useState<FilmResultModel>();

    useEffect(() => {
        const fetchFilmOrTv = async () => {
            try {
                if (type === 'film' || type === 'movie') {
                    const result = await AppHttpClient.GetFilm(+filmId!);
                    if (!result.success) {
                        console.error('Result != succes, fetch films');
                        setFilm(undefined);
                        return;
                    }
                    setFilm(result.value.film);
                    return;
                }

                const result = await AppHttpClient.GetTv(+filmId!);

                if (!result.success) {
                    console.error('Result != succes, fetch tv');
                    setFilm(undefined);
                    return;
                }

                setFilm(TvHelper.convertTvToFilm(result.value.tv));
            } catch (error) {
                console.error('Une erreur est survenue lors de la récupération du film', error);
            }
        };

        const fetchWatchProviders = async () => {
            try {
                const result = await AppHttpClient.GetWatchProviders(+filmId!, type!);

                if (!result.success) {
                    console.error('Result != succes, fetch watch providers');
                    return;
                }

                setWatchProviders(result.value.providers);
            } catch (error) {
                console.error('Une erreur est survenue lors de la récupération du film', error);
            }
        };

        fetchFilmOrTv();
        fetchWatchProviders();
    }, [filmId]);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedWatchProvider(event.target.value as string);
    };

    useEffect(() => {
        const getWatchProvidersNames = (): string[] => {
            let providersNames: string[] = [];

            if (watchProviders === undefined) {
                return providersNames;
            }

            if (Object.keys(watchProviders).length === 0) {
                return providersNames;
            }

            Object.entries(watchProviders).forEach(([countryCode, providerModel]) => {
                if (providerModel.flatrate === undefined) {
                    return;
                }

                if (providerModel.flatrate.length === 0) {
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

    useEffect(() => {
        const flagWithCountryComponents: React.ReactNode[] = [];

        if (watchProviders === undefined) {
            return;
        }

        if (Object.keys(watchProviders).length === 0) {
            return;
        }

        Object.entries(watchProviders).forEach(([countryCode, providerModel]) => {
            if (providerModel.flatrate === undefined) {
                return;
            }

            if (providerModel.flatrate.length === 0) {
                return;
            }

            providerModel.flatrate.forEach((flatrate) => {
                if (flatrate.provider_name === selectedWatchProvider) {
                    flagWithCountryComponents.push(
                        <Grid
                            item
                            key={countryCode}
                            xs={3}
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <FlagWithCountry
                                flagPath={`https://flagsapi.com/${countryCode}/flat/64.png`}
                                countryName={CountriesByCode.GetCountryByCode(countryCode)}
                            />
                        </Grid>
                    );
                }
            });
        });

        setAvailableCountries(flagWithCountryComponents);
    }, [selectedWatchProvider]);

    if (watchProviders === undefined) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10%',
                    display: 'flex'
                }}
            >
                <Loader message={'Loading infos ...'} />;
            </Box>
        );
    }

    if (film === undefined) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10%',
                    display: 'flex'
                }}
            >
                <Loader message={'404 not found'} />;
            </Box>
        );
    }

    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: { xs: '20%', sm: '15%', md: '10%', lg: '8%', xl: '5%' },
                gap: {
                    xs: 5,
                    sm: 8,
                    md: 10,
                    lg: 15,
                    xl: 15
                }
            }}
            display="flex"
        >
            <Box
                display="flex"
                sx={{
                    width: { xs: '95%', sm: '90%', md: '80%', lg: '70%', xl: '60%' },
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
                    width: {
                        xs: '95%',
                        sm: '90%',
                        md: '90%',
                        lg: '90%',
                        xl: '90%'
                    },
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
                    {watchProviderNames.length !== 0 ? (
                        <>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.2rem',
                                        md: '1.2rem',
                                        lg: '1.2rem',
                                        xl: '1.2rem'
                                    }
                                }}
                            >
                                It's available to watch with a subscription on these streaming plateforms/countries :)
                            </Typography>
                            <FormControl
                                sx={{
                                    width: {
                                        xs: '50%',
                                        sm: '40%',
                                        md: '30%',
                                        lg: '25%',
                                        xl: '25%'
                                    }
                                }}
                            >
                                <Select
                                    value={selectedWatchProvider}
                                    onChange={handleChange}
                                    sx={{
                                        fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem' } // Taille de texte responsive
                                    }}
                                >
                                    {watchProviderNames.map((watchProviderName, index) => (
                                        <MenuItem
                                            key={index}
                                            value={watchProviderName}
                                            sx={{
                                                fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem' } // Taille des items responsive
                                            }}
                                        >
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

                {availableCountries.length !== 0 ? (
                    <Grid
                        container
                        sx={{
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
