import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const FilmSearchButton = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim()) {
            navigateToResults();
        }
    };
    const navigateToResults = async () => {
        navigate(`/results/${inputValue}`);
    };

    const { film } = useParams();

    useEffect(() => {
        if (film !== undefined) {
            setInputValue(film);
        }
    }, [film]);

    return (
        <Stack
            display="flex"
            direction={'row'}
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                gap: {
                    xs: '0.2rem',
                    sm: '0.4rem',
                    md: '0.6rem',
                    lg: '0.8rem',
                    xl: '1rem'
                }
            }}
        >
            <TextField
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                required
                placeholder="Avengers ..."
                variant="outlined"
                InputProps={{
                    sx: {
                        fontSize: {
                            xs: '1rem',
                            sm: '1.3rem',
                            md: '1.6rem',
                            lg: '1.9rem',
                            xl: '2.1rem'
                        },
                        color: 'white',
                        textAlign: 'start'
                    }
                }}
                InputLabelProps={{
                    sx: {
                        fontSize: {
                            xs: '1rem',
                            sm: '1.3rem',
                            md: '1.6rem',
                            lg: '1.9rem',
                            xl: '2.1rem'
                        }
                    }
                }}
                sx={{
                    width: '80%',
                    height: 'auto',
                    marginBottom: { xs: '1rem', sm: 0 }
                }}
            />
            <Button
                color="primary"
                sx={{
                    width: 'auto',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onClick={navigateToResults}
                disabled={!inputValue.trim()}
            >
                <SearchIcon
                    sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.2rem',
                            md: '2.3rem',
                            lg: '2.4rem',
                            xl: '2.5rem'
                        },
                        color: 'white'
                    }}
                />
            </Button>
        </Stack>
    );
};

export default FilmSearchButton;
