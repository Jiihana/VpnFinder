import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import { FormGroup, FormControlLabel, Switch, Stack, colors } from '@mui/material';
import { useContext, useState } from 'react';
import { DataContext } from '../../Shared/DataContext';

const pages = ['Search', 'About', 'Credits'];

function Header() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const dataContext = useContext(DataContext);

    const handleNav = (page: string) => {
        if (page === pages[0]) {
            navigate(`/`);
            return;
        }

        navigate(`/${page.toLowerCase()}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        dataContext.setIncludeAdult(event.target.checked);
    };

    return (
        <AppBar position="fixed" sx={{ height: 'auto' }}>
            <Toolbar
                disableGutters
                sx={{
                    paddingLeft: '2%',
                    backgroundColor: 'primary.dark',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '5vh',
                    maxHeight: '5vh'
                }}
            >
                <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', width: 'auto' }}>
                    <PublicIcon sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', ls: 'flex', xl: 'flex' }, mr: '2%' }} />
                    <Typography
                        variant="h6"
                        onClick={() => handleNav('Search')}
                        sx={{
                            mr: '2%',
                            display: { xs: 'none', sm: 'flex', md: 'flex', ls: 'flex', xl: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            fontSize: {
                                sm: '1rem', // écrans moyens
                                md: '1rem', // grands écrans
                                lg: '1rem', // très grands écrans
                                xl: '1rem' // écrans extra larges
                            }
                        }}
                    >
                        VPNCF
                    </Typography>
                    <Stack direction={'row'}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleNav.bind(null, page)}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    width: 'auto',
                                    fontSize: {
                                        xs: '0.75rem', // petite taille pour les petits écrans (mobile)
                                        sm: '1rem', // écrans moyens
                                        md: '1rem', // grands écrans
                                        lg: '1rem', // très grands écrans
                                        xl: '1rem' // écrans extra larges
                                    }
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
                <FormGroup sx={{ display: 'flex', width: '50%', justifyContent: 'flex-end' }}>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label={
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '0.75rem',
                                        sm: '1rem',
                                        md: '1rem',
                                        lg: '1rem',
                                        xl: '1rem'
                                    }
                                }}
                            >
                                Show adult content
                            </Typography>
                        }
                        labelPlacement="start"
                        sx={{ paddingRight: '2%', display: 'flex' }}
                    />
                </FormGroup>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
