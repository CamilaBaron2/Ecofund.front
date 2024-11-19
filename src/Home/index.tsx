// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigateCampanas = () => {
    navigate('/campanas');
  };

  const handleNavigateReciclaje = () => {
    navigate('/reciclaje');
  };

  const handleNavigatePuntosAzules = () => {
    navigate('/puntos-azules');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(/images/medioambiente.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ zIndex: 2, display: 'flex', gap: 2 }}>
        <Card
          sx={{ width: 400, cursor: 'pointer' }}
          onClick={handleNavigateCampanas}
        >
          <CardMedia
            component="img"
            height="350"
            image="/images/campana.jpg"
            alt="Campañas"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Campañas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Únete a nuestras campañas y aprende a clasificar residuos
              correctamente.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ width: 400, cursor: 'pointer' }}
          onClick={handleNavigateReciclaje}
        >
          <CardMedia
            component="img"
            height="350"
            image="/images/reciclaje.jpg"
            alt="Reciclaje"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Reciclaje
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descubre los puntos cercanos para reciclar y contribuye a un
              planeta más limpio.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ width: 400, cursor: 'pointer' }}
          onClick={handleNavigatePuntosAzules}
        >
          <CardMedia
            component="img"
            height="350"
            image="/images/puntos_azules.jpg"
            alt="Puntos Azules"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Puntos Azules
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Participa en la recolección de medicamentos vencidos y ayuda a
              cuidar el medio ambiente.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
