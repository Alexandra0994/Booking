import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './styles.module.scss';
import { useGetAuthMutation } from '../../api/RootApi';

const SignIn: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [getAuth, { isLoading }] = useGetAuthMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await getAuth({ username, password }).unwrap();
            console.log('Token received:', response.token);
            setAuthToken(response.token); // Save token for later use
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.formContainer}>
                <Typography variant="h4" gutterBottom>
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputField}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputField}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                </form>
                {authToken && (
                    <Typography variant="body1" className={styles.tokenDisplay}>
                        Token: {authToken}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default SignIn;


