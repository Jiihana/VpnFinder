import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, colors } from '@mui/material';
import { themeOptions } from './Theme/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResultPage from './Pages/ResultPage/ResultPage';
import FilmPage from './Pages/Film/FilmPage';
import Home from './Pages/Home/Home';

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
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                    width: '100vw'
                }}
            >
                <CssBaseline />

                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>

                        <Route path="/results/:film" element={<ResultPage />}></Route>
                        <Route path="/film/:film" element={<FilmPage />}></Route>
                    </Routes>
                </Router>
            </Box>
        </ThemeProvider>
    );
};

export default Application;
