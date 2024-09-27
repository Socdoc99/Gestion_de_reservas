// @ts-ignore
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
// @ts-ignore
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', { name, email, password });
            history.push('/login');
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Registrarse
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                    Registrarse
                </Button>
            </form>
        </Container>
    );
};

export default Register;