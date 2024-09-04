import { Stack, Typography } from '@mui/material';

interface loaderProps {
    message: string;
}

const Loader = (props: loaderProps) => {
    return (
        <Stack
            spacing={15}
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(1, 1, 1, 0.5)',
                border: '2px solid white',
                borderRadius: '20px',
                padding: '0.5%'
            }}
        >
            <Typography variant="h2">{props.message}</Typography>
        </Stack>
    );
};

export default Loader;
