// @ts-ignore
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Cambiar useHistory a useNavigate
import { TextField, Button } from '@material-ui/core'; // Asegúrate de haber instalado @mui/material

const EspacioForm: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [capacidad, setCapacidad] = useState<number | string>('');
    const { id } = useParams(); // Reemplazar el id del espacio si es necesario
    const navigate = useNavigate(); // Cambiado de useHistory

    useEffect(() => {
        if (id) {
            // Lógica para cargar los datos del espacio a editar
            // setNombre y setCapacidad según sea necesario
        }
    }, [id]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (id) {
            // Lógica para editar el espacio
        } else {
            // Lógica para crear un nuevo espacio
        }
        navigate('/espacios'); // Redireccionar a la lista de espacios
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nombre del Espacio"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <TextField
                label="Capacidad"
                value={capacidad}
                onChange={(e) => setCapacidad(e.target.value)}
                required
                type="number"
            />
            <Button type="submit" variant="contained" color="primary">
                {id ? 'Editar Espacio' : 'Crear Espacio'}
            </Button>
        </form>
    );
};

export default EspacioForm;
