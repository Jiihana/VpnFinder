import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, colors } from '@mui/material';
import { themeOptions } from './Theme/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResultPage from './Pages/ResultPage/ResultPage';
import FilmPage from './Pages/Film/FilmPage';
import Home from './Pages/Home/Home';
import Header from './Pages/Footer_header/Header';
import About from './Pages/About/About';
import Credits from './Pages/Credits/Credits';
import Footer from './Pages/Footer_header/Footer';
import { DataProvider } from './Shared/DataContext';

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
                    <DataProvider>
                        <Header />
                        <Footer />
                        <Box
                            sx={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'url(/images/pages/home.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                zIndex: -1
                            }}
                        />
                        <Box
                            display="flex"
                            sx={{
                                minHeight: '100vh',
                                width: '100%',
                                position: 'relative'
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<Home />}></Route>

                                <Route path="/results/:film" element={<ResultPage />}></Route>
                                <Route path="/:type/:filmId" element={<FilmPage />}></Route>
                                <Route path="/About" element={<About />}></Route>
                                <Route path="/Credits" element={<Credits />}></Route>
                            </Routes>
                        </Box>
                    </DataProvider>
                </Router>
            </>
        </ThemeProvider>
    );
};

export default Application;
