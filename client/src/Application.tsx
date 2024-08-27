import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, colors } from '@mui/material';
import { themeOptions } from './Theme/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Home/Home';
import ResultPage from './Pages/ResultPage/ResultPage';
import FilmPage from './Pages/Film/FilmPage';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const darkTheme = createTheme({
        ...themeOptions
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                display="flex"
                sx={{
                    backgroundImage: 'url(/images/pages/home.png)',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    width: '100vw',
                    justifyContent: 'center',
                    alignItems: 'start',
                    backgroundAttachment: 'fixed'
                }}
            >
                <CssBaseline />

                <Router>
                    <Routes>
                        <Route path="/" element={<FilmPage />}></Route>

                        <Route path="/xxxx/:xxxxx" element={<Accueil />}></Route>
                    </Routes>
                </Router>
            </Box>
        </ThemeProvider>
    );
};

export default Application;
