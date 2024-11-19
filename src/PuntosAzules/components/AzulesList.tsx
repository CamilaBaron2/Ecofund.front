import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AzulesList = ({ campanas }: { campanas: any[] }) => {
  return (
    <div style={{ padding: '20px' }}>
      {campanas.map((campana, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
            border: '2px solid #333',
            position: 'relative', // Asegura que el punto esté en la tarjeta
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {campana.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
              {campana.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
              <strong>Ubicación:</strong> {campana.ubicacion}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
              <strong>Fecha de inicio:</strong> {campana.fecha_inicio}
            </Typography>

            {/* Punto azul en cada tarjeta */}
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: 'blue',  // Cambié a color azul
                borderRadius: '50%',
                position: 'absolute',
                top: '10px',
                right: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {index + 1} {/* El número en el centro de cada punto */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AzulesList;