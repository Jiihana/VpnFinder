import { Stack, Typography } from '@mui/material';

interface loaderProps {
    message: string;
}

const Loader = (props: loaderProps) => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '20px',
                padding: { xs: '4% 2%', sm: '3% 2%', md: '2%' }
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontSize: {
                        xs: '1.2rem',
                        sm: '1.5rem',
                        md: '2rem',
                        lg: '2.5rem',
                        xl: '3rem'
                    },
                    textAlign: 'center'
                }}
            >
                {props.message}
            </Typography>
        </Stack>
    );
};

export default Loader;
