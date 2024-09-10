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
    typography: { fontFamily: ['Space Grotesk'].join(',') }
};
