import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// Define el tipo para las campañas
interface Campana {
  titulo: string;
  descripcion: string;
  ubicacion: string;
  fecha_inicio: string;
}

function CampanaList() {
  const [campanas, setCampanas] = useState<Campana[]>([]); // Especificamos que 'campanas' es un array de objetos de tipo Campana

  useEffect(() => {
    const fetchCampanas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/API/campanas'); // Cambié la URL para obtener todas las campañas
        if (!response.ok) {
          throw new Error('Error fetching campaigns');
        }
        const data = await response.json();
        setCampanas(data.data); // Asegúrate de acceder a 'data' que es el array de campañas
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampanas();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        {campanas.map((campana, index) => (
          <Grid item xs={12} key={index}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '2px solid #333',  // Borde oscuro agregado
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '1rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Efecto de sombra al hacer hover
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',  // Cambio de sombra al hacer hover
                },
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CampanaList;





