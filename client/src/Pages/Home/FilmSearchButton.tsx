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
        if (film != undefined) {
            setInputValue(film);
        }
    }, [film]);

    return (
        <Stack
            display="flex"
            direction="row"
            sx={{
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TextField
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                required
                placeholder="Avengers ..."
                variant="outlined"
                inputProps={{ style: { fontSize: 25, textAlign: 'start' } }}
                InputLabelProps={{ style: { fontSize: 25 } }}
                sx={{ input: { color: 'white' }, width: '80%', height: 'auto' }}
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
                <SearchIcon sx={{ fontSize: '40px', color: 'white' }} />
            </Button>
        </Stack>
    );
};

export default FilmSearchButton;
