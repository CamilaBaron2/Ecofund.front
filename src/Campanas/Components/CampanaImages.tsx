import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CampanaImages() {
  const [currentIndexTop, setCurrentIndexTop] = useState(0);
  const [currentIndexBottom, setCurrentIndexBottom] = useState(0);

  // Datos para el primer y segundo carrusel
  const imagenesTop = [
    { src: `${process.env.PUBLIC_URL}/images/capacitacion1.jpg`, title: 'Puesto de Mando Unificado (PMU)', description: 'Hace una semana, activamos este Puesto de Mando Unificado (PMU) para responder a las fuertes lluvias en Bogotá. Hoy, todas las capacidades del Distrito siguen enfocadas en controlar las emergencias que se presenten en la ciudad.' },
    { src: `${process.env.PUBLIC_URL}/images/capacitacion2.jpg`, title: 'Campaña 2', description: 'Descripción 2' },
    { src: `${process.env.PUBLIC_URL}/images/capacitacion3.jpg`, title: 'Campaña 3', description: 'Descripción 3' },
  ];

  const imagenesBottom = [
    { src: `${process.env.PUBLIC_URL}/images/campaña4.jpg`, title: '#LluviasBogota', description: 'Tu reporte puede hacer la diferencia durante las #LluviasEnBogotá.'},
    { src: `${process.env.PUBLIC_URL}/images/campaña5.jpg`, title: 'Cuidemos nuestros Arboles', description: 'Aprende a identificar árboles en riesgo: hongos, pudrición o ramas secas son algunas señales.' },
    { src: `${process.env.PUBLIC_URL}/images/campaña6.jpg`, title: 'Juntos por un país mejor', description: 'Entérate de los diferentes riesgos que enfrentamos con el aumento de las precipitaciones. ' },
  ];

  const handlePrevTop = () => {
    setCurrentIndexTop((prevIndex) => (prevIndex === 0 ? imagenesTop.length - 1 : prevIndex - 1));
  };

  const handleNextTop = () => {
    setCurrentIndexTop((prevIndex) => (prevIndex === imagenesTop.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevBottom = () => {
    setCurrentIndexBottom((prevIndex) => (prevIndex === 0 ? imagenesBottom.length - 1 : prevIndex - 1));
  };

  const handleNextBottom = () => {
    setCurrentIndexBottom((prevIndex) => (prevIndex === imagenesBottom.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', overflow: 'hidden' }}>
      {/* Primer carrusel */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndexTop * 100}%)`,
          }}
        >
          {imagenesTop.map((item, index) => (
            <Card key={index} sx={{ minWidth: '100%' }}>
              <CardMedia component="img" image={item.src} alt={item.title} sx={{ width: '100%', height: 'auto' }} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton
          onClick={handlePrevTop}
          sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNextTop}
          sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Video entre los carruseles */}
      <Box sx={{ mb: 4 }}>
        <video width="100%" controls>
          <source src={`${process.env.PUBLIC_URL}/videos/tu_video.mp4`} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </Box>

      {/* Segundo carrusel */}
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndexBottom * 100}%)`,
          }}
        >
          {imagenesBottom.map((item, index) => (
            <Card key={index} sx={{ minWidth: '100%' }}>
              <CardMedia component="img" image={item.src} alt={item.title} sx={{ width: '100%', height: 'auto' }} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton
          onClick={handlePrevBottom}
          sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNextBottom}
          sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CampanaImages;
