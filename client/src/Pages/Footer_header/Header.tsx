import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import { FormGroup, FormControlLabel, Switch, Stack, colors } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Shared/DataContext';

const pages = ['Search', 'About', 'Credits'];

function Header() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const dataContext = useContext(DataContext);

    const handleNav = (page: string) => {
        if (page == pages[0]) {
            navigate(`/`);
            return;
        }

        navigate(`/${page.toLowerCase()}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        dataContext.setIncludeAdult(checked);
    };

    return (
        <AppBar position="fixed">
            <Toolbar
                disableGutters
                sx={{ paddingLeft: '2%', backgroundColor: 'primary.dark', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center', width: 'auto' }}>
                    <PublicIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        onClick={() => handleNav('Search')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        VPNCF
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button key={page} onClick={handleNav.bind(null, page)} sx={{ my: 2, color: 'white', display: 'block' }}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Stack>
                <FormGroup sx={{ display: 'flex', width: '15%' }}>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label="Show adult content"
                        labelPlacement="start"
                        sx={{ paddingRight: '5%' }}
                    />
                </FormGroup>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
