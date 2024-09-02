import { ChangeEvent, useState } from 'react';
import { Box, Button, colors, IconButton, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const FilmSearchButton = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const navigateToResults = async () => {
        navigate(`/results/${inputValue}`);
    };

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
            >
                <SearchIcon sx={{ fontSize: '40px', color: 'primary.dark' }} />
            </Button>
        </Stack>
    );
};

export default FilmSearchButton;
