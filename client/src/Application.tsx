import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, colors } from '@mui/material';
import { themeOptions } from './Theme/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResultPage from './Pages/ResultPage/ResultPage';
import FilmPage from './Pages/Film/FilmPage';
import Home from './Pages/Home/Home';
import ResponsiveAppBar from './Pages/AppBar/ResponsiveAppBar';
import About from './Pages/About/About';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const darkTheme = createTheme({
        ...themeOptions
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <>
                <CssBaseline />

                <Router>
                    <ResponsiveAppBar />
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
                        <Routes>
                            <Route path="/" element={<Home />}></Route>

                            <Route path="/results/:film" element={<ResultPage />}></Route>
                            <Route path="/film/:filmId" element={<FilmPage />}></Route>
                            <Route path="/About" element={<About />}></Route>
                            <Route path="/Credits" element={<Home />}></Route>
                        </Routes>
                    </Box>
                </Router>
            </>
        </ThemeProvider>
    );
};

export default Application;
