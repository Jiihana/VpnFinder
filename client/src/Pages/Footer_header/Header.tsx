import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';

const pages = ['Search', 'About', 'Credits'];

function Header() {
    const navigate = useNavigate();

    const handleNav = (page: string) => {
        if (page == pages[0]) {
            navigate(`/`);
            return;
        }

        navigate(`/${page.toLowerCase()}`);
    };

    return (
        <AppBar position="fixed">
            <Toolbar disableGutters sx={{ paddingLeft: '2%', backgroundColor: 'primary.dark' }}>
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
                    VPNF
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button key={page} onClick={handleNav.bind(null, page)} sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
