// @ts-ignore
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

// Crear un componente de enlace personalizado que pueda manejar refs
const LinkBehavior = React.forwardRef<any, any>(function (props: React.PropsWithoutRef<any>, ref: ((instance: any) => void) | React.MutableRefObject<any>) {
    return (
        <RouterLink ref={ref} {...props} />
    );
});

// Usar este componente como el componente del botón
const MyComponent = () => {
    return (
        <Button
            component={LinkBehavior}
            to="/ruta-deseada"
            variant="outlined"
            color="primary"
            style={{ margin: '10px' }}
        >
            Texto del Botón
        </Button>
    );
};

export default MyComponent;
