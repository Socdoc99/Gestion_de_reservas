import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Sistema de Reserva de Espacios
                </Typography>
                <Button color="inherit" component={Link} to="/">Inicio</Button>
                <Button color="inherit" component={Link} to="/espacios">Espacios</Button>
                <Button color="inherit" component={Link} to="/login">Iniciar Sesión</Button>
                <Button color="inherit" component={Link} to="/register">Registrarse</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;