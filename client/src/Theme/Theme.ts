import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            light: '#009ca5',
            main: '#428d87',
            dark: '#121a2f'
        },
        secondary: {
            light: '#93e286',
            main: '#f71a64',
            dark: '#415067'
        }
    },
    typography: {
        fontFamily: ['Space Grotesk'].join(','),
        h1: {
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.5)'
        },
        h2: {
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.5)'
        },
        h3: {
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.4)'
        }
    }
};
