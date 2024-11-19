import React from 'react';
import { AppBar, Stack, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    const token = localStorage.getItem('token'); // Recupera el token desde el localStorage

    if (token) {
      // Hacer la solicitud de logout al backend
      fetch('http://127.0.0.1:8000/API/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          // Eliminar el token del localStorage después de hacer logout
          localStorage.removeItem('token');
          
          // Redirigir al usuario al login o página de inicio
          navigate('/'); 
          console.log(data);
        })
        .catch(error => {
          console.error('Error en el logout:', error);
        });
    }
  };

  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: '#a9cf55', // Color de fondo del Header
        boxShadow: 'none', // Sin sombra
      }}
    >
      <Toolbar>
        {/* Logo que redirige a la página de inicio */}
        <Stack sx={{ cursor: 'pointer' }} onClick={() => navigate('/inicio')}>
          <img src="/images/naturalink.jpg" alt="Logo" width="180" />
        </Stack>

        {/* Espacio para el eslogan */}
        <Stack flexGrow={1}>
          <Typography variant="h6" align="center" sx={{ color: 'white' }}>
            Naturaleza y educación en armonía
          </Typography>
        </Stack>

        {/* Botón para cerrar sesión */}
        <Stack direction="row" gap={2}>
          <Button color="inherit" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
