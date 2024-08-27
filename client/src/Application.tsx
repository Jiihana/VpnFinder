import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { themeOptions } from './Theme/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Home/Home';
import ResultPage from './Pages/ResultPage/ResultPage';

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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100vw',
                    justifyContent: 'center',
                    alignItems: 'start'
                }}
            >
                <CssBaseline />

                <Router>
                    <Routes>
                        <Route path="/" element={<ResultPage />}></Route>

                        <Route path="/xxxx/:xxxxx" element={<Accueil />}></Route>
                    </Routes>
                </Router>
            </Box>
        </ThemeProvider>
    );
};

export default Application;
