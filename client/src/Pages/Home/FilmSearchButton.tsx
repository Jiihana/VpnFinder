import { ChangeEvent, useState } from 'react';
import { Box, Button, colors, IconButton, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const FilmSearchButton = () => {
    const background = 'url(/images/buttons/menuButton1.png)';

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const navigate = useNavigate();

    const handleJoinGame = async () => {
        navigate(`/game/${inputValue}`);
    };

    return (
        <Stack
            display="flex"
            direction="row"
            sx={{
                width: '100%',
                height: 'auto'
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
                InputProps={{
                    disableUnderline: true
                }}
            />
            <Button
                color="primary"
                sx={{
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <SearchIcon sx={{ fontSize: '40px' }} />
            </Button>
        </Stack>
    );
};

export default FilmSearchButton;
